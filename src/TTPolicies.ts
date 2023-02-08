import { trustedTypes } from "trusted-types";
import DOMPurify from "dompurify";

type LiteralString<T extends string> = string extends T ? "NOPE": T;

export const WebAgentPolicy = trustedTypes.createPolicy("webagent", {
    createHTML(value: string): TrustedHTML&string {
        throw new TypeError("HTML is not allowed by this policy.");
    },

    createScriptURL(value: string): TrustedScriptURL&string {
        return encodeURIComponent(value) as TrustedScriptURL&string;
    },

    createScript(value: string): TrustedScript&string {
        throw new TypeError("Scripts are not allowed by this policy.");
    }
});

export const DOMPurifyPolicy = trustedTypes.createPolicy("dompurify", {
    createHTML(value: string): TrustedHTML&string {
        return DOMPurify.sanitize(value) as TrustedHTML&string;
    },

    createScriptURL(value: string): TrustedScriptURL&string {
        return DOMPurify.sanitize(value) as TrustedScriptURL&string;
    },

    createScript(value: string): TrustedScript&string {
        return DOMPurify.sanitize(value) as TrustedScript&string;
    }
});

export const LiteralStringPolicy = trustedTypes.createPolicy("literal-string", {
    createHTML(value: string): TrustedHTML&string {
        throw new TypeError("HTML is not allowed by this policy.");
    },

    createScriptURL: (value: string) => value,

    createScript(value: string): TrustedScript&string {
        throw new TypeError("Scripts are not allowed by this policy.");
    }
});

export const DefaultPolicy = trustedTypes.createPolicy("default", {
    createHTML(value: string): TrustedHTML&string {
        console.log("Sanitising anyway the HTML with DOMPurify.");

        return DOMPurify.sanitize(value) as TrustedHTML&string;
    },

    createScriptURL(value: string): TrustedScriptURL&string {
        console.log("Sanitising anyway the script URL with DOMPurify.");

        return DOMPurify.sanitize(value) as TrustedScriptURL&string;
    },

    createScript(value: string): TrustedScript&string {
        console.log("Sanitising anyway the script with DOMPurify.");

        return DOMPurify.sanitize(value) as TrustedScript&string;
    }
});

export function scriptURLFromLiteralString<T extends string>(s: LiteralString<T>): TrustedScriptURL&string {
    return LiteralStringPolicy.createScriptURL(s) as TrustedScriptURL&string;
}