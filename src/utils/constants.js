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

export const WEIGHTS = {
    [SCORE_BREAKDOWN.SOCIAL_SECURITY_NUMBER]: 0.20253,
    [SCORE_BREAKDOWN.USERNAME_PASSWORD]: 0.17784,
    [SCORE_BREAKDOWN.FINANCIAL_BANKING]: 0.160917,
    [SCORE_BREAKDOWN.BIOMETRIC_DATA]: 0.079114,
    [SCORE_BREAKDOWN.HEALTH_INSURANCE]: 0.077547,
    [SCORE_BREAKDOWN.DRIVERS_LICENSE]: 0.073765,
    [SCORE_BREAKDOWN.PASSPORT_NUMBER]: 0.073031,
    [SCORE_BREAKDOWN.MEDICAL_INFORMATION]: 0.071585,
    [SCORE_BREAKDOWN.FULL_DATE_OF_BIRTH]: 0.06896,
    [SCORE_BREAKDOWN.OTHER]: 0.076776,
    // [SCORE_BREAKDOWN.DAYS_SINCE_BREACH] : 0.2,
    // [SCORE_BREAKDOWN.DAYS_TO_REPORT] : 0.2,
}

export const TOOLTIPS = {
    [SCORE_BREAKDOWN.SOCIAL_SECURITY_NUMBER]: {
        penalty: BREAKDOWN_EFFECTS.BAD,
        text: "Social Security Numbers are a key piece of information used to commit identity theft. "
    },
    [SCORE_BREAKDOWN.USERNAME_PASSWORD]:
    {
        penalty: BREAKDOWN_EFFECTS.BAD,
        text: "Usernames and passwords are a key piece of information used to commit identity theft. "
    },
    [SCORE_BREAKDOWN.FINANCIAL_BANKING]: {
        penalty: BREAKDOWN_EFFECTS.BAD,
        text: "Financial and banking information is a key piece of information used to commit identity theft."
    },
    [SCORE_BREAKDOWN.BIOMETRIC_DATA]: {
        penalty: BREAKDOWN_EFFECTS.NEUTRAL,
        text: "Biometric data is used to identify individuals based on their unique physical characteristics."
    },
    [SCORE_BREAKDOWN.HEALTH_INSURANCE]: {
        penalty: BREAKDOWN_EFFECTS.NEUTRAL,
        text: "Health insurance data are used to identify individuals and access their health insurance benefits."
    },
    [SCORE_BREAKDOWN.DRIVERS_LICENSE]: {
        penalty: BREAKDOWN_EFFECTS.NEUTRAL,
        text: "Driver's licenses are used to identify individuals and access their driving records."
    },
    [SCORE_BREAKDOWN.PASSPORT_NUMBER]: {
        penalty: BREAKDOWN_EFFECTS.NEUTRAL,
        text: "Passport numbers are used to identify individuals and access their travel records."
    },
    [SCORE_BREAKDOWN.MEDICAL_INFORMATION]: {
        penalty: BREAKDOWN_EFFECTS.NEUTRAL,
        text: "Medical information is used to identify individuals and access their health records."
    },
    [SCORE_BREAKDOWN.FULL_DATE_OF_BIRTH]: {
        penalty: BREAKDOWN_EFFECTS.GOOD,
        text: "Full date of birth is used to identify individuals and verify their age."
    },
    [SCORE_BREAKDOWN.OTHER]: {
        penalty: BREAKDOWN_EFFECTS.NEUTRAL,
        text: "Other information that was compromised in the data breach."
    },
    [SCORE_BREAKDOWN.DAYS_SINCE_BREACH]: {
        penalty: null,
        text: "The score increases approximately 17.68% per year, since the latest breach."
    },
    [SCORE_BREAKDOWN.DAYS_TO_REPORT]: {
        penalty: null,
        text: "The score decays approximately 20% per year as a company waits to report their data breach."
    },
    [SCORE_BREAKDOWN.NUMBER_OF_WASHINGTONIANS_AFFECTED]: {
        penalty: null,
        text: "The number of Washingtonians affected by the data breach."
    }
}