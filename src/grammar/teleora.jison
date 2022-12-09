/* description: Parses end executes mathematical expressions. */

/* lexical grammar */
%lex

%%
\s+                   /* skip whitespace */
"//".*                /* skip single line comment */
"/*"([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/  /* skip multi line comments */

"->"                  return 'ARROW';
","                   return ',';
";"                   return ';';
[0-9]+("."[0-9]+)?\b  return 'NUMBER';
[A-Z]+[A-Za-z0-9]*\b  return 'VARIABLE';
[a-z]+[A-Za-z0-9]*\b  return 'ATOM';


":"                   return ':';
"*"                   return '*';
"/"                   return '/';
"-"                   return '-';
"+"                   return '+';
"^"                   return '^';
"("                   return '(';
")"                   return ')';
"PI"                  return 'PI';
"E"                   return 'E';
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
    }

    class Statement { // a statement is of the form "statement(term1, term2, ..., termn)
        constructor(term, clause) {
            this.term = term     // name
            this.clause = clause // arguments
        }
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
    }

    class Program { 
        constructor(goals, conditions) { 
            this.goals = goals; 
            this.conditions = conditions;
        }
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
    : program EOF
        {console.log(JSON.stringify($1, null, '\t')); return $1;}
    ;

program :
       goal program          { $2.goals.unshift($1); $$ = $2; }
    |  condition program    { $2.conditions.unshift($1); $$ = $2;}
    |                       { $$ = new Program([], []); }; 



condition :                    
      statement ':' sclause ';'     { $$ = new Condition($1, $3); }
    | statement ';'                 { $$ = new Condition($1, []); }
    | ATOM ';'                      { $$ = new Condition($1, []); };


goal :
      statement ':' goalbody ';'  { $$ = new Goal($1, $3[0], $3[1]); }
    | statement ARROW sclause ';' { $$ = new Goal($1, [], $3); };

goalbody : 
    sclause ARROW sclause { $$ = [$1, $3]; };

statement : 
    ATOM '(' sclause ')' { $$ = new Statement($1, $3); };

sclause :
      statement ',' sclause     {  $$ = [$1].concat($3); }
    | ATOM ',' sclause          {  $$ = [$1].concat($3); }
    | VARIABLE ',' sclause      {  $$ = [$1].concat($3); }
    | statement                 { $$ = [$1]; }
    | ATOM                      { $$ = [$1]; }
    | VARIABLE                  { $$ = [$1]; }
    | NUMBER                    { $$ = [$1]; }
    |                           { $$ = []; };

term : 
      ATOM { $$ = new Atom($1); }
    | VARIABLE { $$ = new Variable($1); };


/* math expressions */
mathe
    : mathe '+' mathe
        {$$ = $1+$3;}
    | mathe '-' mathe
        {$$ = $1-$3;}
    | mathe '*' mathe
        {$$ = $1*$3;}
    | mathe '/' mathe
        {$$ = $1/$3;}
    | mathe '^' mathe
        {$$ = Math.pow($1, $3);}
    | '-' mathe %prec UMINUS
        {$$ = -$2;}
    | '(' mathe ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext);}
    | E
        {$$ = Math.E;}
    | PI
        {$$ = Math.PI;}
    ;


