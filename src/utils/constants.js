export const BREAKDOWN_EFFECTS = {
    GOOD: 'good',
    BAD: 'bad',
    NEUTRAL: 'neutral',
}

export const SCORE_PERCENTILES = {
    FIRST: 89.18838,
    SECOND: 74.96589,
}

export const INFORMATION_COMPROMISED = {
    USERNAME_PASSWORD: {
        title: 'Username and Password/Security Question Answers' || 'Email Address and Password/Security Question Answers',
        severity: BREAKDOWN_EFFECTS.BAD,
        actions: [
            'Change your password for the affected account',
            'Change your password for any other accounts that use the same password',
            'Enable two-factor authentication on your accounts',
        ]
    },

    SOCIAL_SECURITY_NUMBER: {
        title: 'Social Security Number',
        severity: BREAKDOWN_EFFECTS.BAD,
        actions: [
            'Place a fraud alert on your credit report',
            'Consider freezing your credit',
            'Monitor your credit report for any suspicious activity',
        ]
    },
    FINANCIAL_BANKING_INFORMATION:
    {
        title: 'Financial & Banking Information',
        severity: BREAKDOWN_EFFECTS.BAD,
        actions: [
            'Monitor your bank accounts for any suspicious activity',
            'Consider changing your bank account number',
            'Consider freezing your credit',
        ]
    },
    BIOMETRIC_DATA:
    {
        title: 'Biometric Data',
        severity: BREAKDOWN_EFFECTS.NEUTRAL,
        actions: [
            "Contact relevant authorities to report the breach",
            "Monitor for identity theft",
        ]
    },
    HEALTH_INSURANCE_POLICY_OR_ID_NUMBER:
    {
        title: 'Health Insurance Policy or ID Number',
        severity: BREAKDOWN_EFFECTS.NEUTRAL,
        actions: [
            "Monitor your health insurance claims for any suspicious activity",
            "Contact your health insurance provider to report the breach",
        ]
    },
    DRIVERS_LICENSE:
    {
        title: 'Driver\'s License or Washington ID Card Number',
        severity: BREAKDOWN_EFFECTS.NEUTRAL,
        actions: [
            "Notify the Department of Licensing",
            "Monitor your credit report for any suspicious activity",
        ]
    },
    PASSPORT_NUMBER:
    {
        title: 'Passport Number',
        severity: BREAKDOWN_EFFECTS.NEUTRAL,
        actions: [
            "Report the breach to the U.S. Department of State",
            "Monitor travel records for any suspicious activity",
        ]
    },
    MEDICAL_INFORMATION:
    {
        title: 'Medical Information',
        severity: BREAKDOWN_EFFECTS.NEUTRAL,
        actions: [
            "Notify your healthcare provider",
            "Monitor your health insurance claims for any suspicious activity",
        ]
    },
    FULL_DATE_OF_BIRTH:
    {
        title: 'Full Date of Birth',
        severity: BREAKDOWN_EFFECTS.GOOD,
        actions: [
            "Be cautious of potential phishing attempts",
            "Strengthen your online security practices",
        ]
    },
    OTHER:
    {
        title: 'Other',
        severity: BREAKDOWN_EFFECTS.NEUTRAL,
        actions: [
            "Stay informed about the breach",
        ]
    },
}

export const SCORE_BREAKDOWN = {
    BIOMETRIC_DATA: 'Biometric Data',
    DAYS_SINCE_BREACH: 'Days Since Breach',
    DAYS_TO_REPORT: 'Days To Report',
    DRIVERS_LICENSE: 'Driver\'s License or Washington ID Card Number',
    FINANCIAL_BANKING: 'Financial & Banking Information',
    FULL_DATE_OF_BIRTH: 'Full Date of Birth',
    HEALTH_INSURANCE: 'Health Insurance Policy or ID Number',
    MEDICAL_INFORMATION: 'Medical Information',
    NUMBER_OF_WASHINGTONIANS_AFFECTED: 'Number of Washingtonians Affected',
    OTHER: 'Other',
    PASSPORT_NUMBER: 'Passport Number',
    SOCIAL_SECURITY_NUMBER: 'Social Security Number',
    USERNAME_PASSWORD: 'Username/Password',
};