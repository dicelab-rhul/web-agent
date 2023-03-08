/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
"//".*                /* skip single line comment */
"/*"([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/  /* skip multi line comments */

":"                   return ':';
"->"                  return 'ARROW';
","                   return ',';
";"                   return ';';


[0-9]+("."[0-9]+)?\b  return 'NUMBER';
[A-Z]+[A-Za-z0-9]*\b  return 'VARIABLE';
[a-z]+[A-Za-z0-9]*\b  return 'ATOM';

// comparison operators
"=="                  return 'EQ';  // not actually needed... can use variable interpolation instead
"="                   return 'ASG';
"!="                  return 'NEQ'; // not actually needed... can use variable interpolation instead
">="                  return 'GTE';
"<="                  return 'LTE';
">"                   return 'GT';
"<"                   return 'LT';

"*"                   return '*';
"/"                   return '/';
"//"                  return '//';
"-"                   return '-';
"+"                   return '+';
"^"                   return '^';
"("                   return '(';
")"                   return ')';
<<EOF>>               return 'EOF';

/lex

%{

    class Term { constructor(name) { this.name = name; }}

    class Atom extends Term { constructor(name) { super(name); }}
    class Variable extends Term { constructor(name) { super(name); }}

    class Clause { // a sequence of terms "t1, t2, t3, ..., tn"
        constructor(terms) {
            this.terms = terms;
        }
        variables() { return this.terms.filter(item => typeof item === Variable); }
    }

    class Statement { // a statement is of the form "statement(term1, term2, ..., termn)
        constructor(term, clause) {
            this.term = term;     // name, this is an Atom?
            this.clause = clause; // arguments
        }

        variables() { return this.clause.variables(); }
    }

    class Goal { // a goal is of the form "name : conditions -> action"
        constructor(statement, conditions, actions) {
            this.statement = statement
            this.conditions = conditions
            this.actions = actions
        }
    }

    class Condition { // a goal is of the form "name : clause"
        constructor(statement, conditions) {
            this.statement = statement
            this.conditions = conditions
        }

        evaluate(args) {
            this.statement.evaluate(args);
        }
    }

    class Program {
        constructor(goals, conditions) {
            this.goals = goals;
            this.conditions = conditions;
        }

        cycle(args) {
            // the goal that is defined in the top of the main file is the first call (or any that match later)
        }
    }

    class Expr {
        constructor(x) {
            this.x = x;
        }
        neg()     { }
        add(y)    { }
        sub(y)    { }
        mult(y)   { }
        div(y)    { }
        idiv(y)   { }
        pow(y)    { }
    }
%}



/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start expressions

%% /* language grammar */

expressions
    : program EOF { return $1; };

program
    :  block ';' program         { $$ = [$1].concat($3); }
    |  block ';'                 { $$ = [$1] };

block // blocks can be goals, conditions, facts, actuator defs, sensor defs, or imports
    : hstatement ':' clause ARROW clause     { $$ = new Goal($1, $3, $5); }
    | hstatement ARROW clause                { $$ = new Goal($1, [], $3); }
    | hstatement ':' clause                  { $$ = new Condition($1, $3); }
    | hstatement                             { $$ = new Condition($1, []); }
    | ATOM                                   { $$ = new Condition($1, []); };

hstatement // statement that can be used in a header
    : ATOM '(' clause ')'       { $$ = new Statement($1, $3); }
    | ATOM '(' ')'              { $$ = new Statement($1, []); };

clause
    : statement ',' clause      { $$ = [$1].concat($3); }
    | statement                 { $$ = [$1]; };

statement
    : ATOM '(' clause ')'       { $$ = new Statement($1, $3); }
    | VARIABLE '(' clause ')'   { $$ = new Statement($1, $3); }
    | ATOM '(' ')'              { $$ = new Statement($1, []); }
    | VARIABLE '(' ')'          { $$ = new Statement($1, []); }
    | ATOM                      { $$ = new Statement($1, []); }
    | lxp                       { $$ = $1; }
    | exp                       { $$ = $1; };

lxp
    : exp LT exp          {$$ = [$1,$3]}
    | exp GT exp          {$$ = [$1,$3]}
    | exp GTE exp         {$$ = [$1,$3]}
    | exp LTE exp         {$$ = [$1,$3]}
    | exp EQ exp          {$$ = [$1,$3]}
    | exp NEQ exp         {$$ = [$1,$3]};

exp
    : exp '+' exp           {$$ = [$1,$3]}
    | exp '-' exp           {$$ = [$1,$3]}
    | exp '*' exp           {$$ = [$1,$3]}
    | exp '/' exp           {$$ = [$1,$3]}
    | exp '^' exp           {$$ = [$1,$3]}
    | '-' exp %prec UMINUS  {$$ = [$2]}
    | '(' exp ')'           {$$ = [$2]}
    | NUMBER                {$$ = [$1]}
    | VARIABLE              {$$ = [$1]};
