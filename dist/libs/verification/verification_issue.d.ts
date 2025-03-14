import { OntoumlElement, Class, Generalization, Relation } from '../ontouml';
import { VerificationIssueCode } from './';
import { ServiceIssueSeverity, ServiceIssue } from './../';
export declare class VerificationIssue implements ServiceIssue {
    id: string;
    code: VerificationIssueCode;
    title: string;
    description: string;
    severity: ServiceIssueSeverity;
    data: {
        source: OntoumlElement;
        context: OntoumlElement[];
    };
    constructor(source: OntoumlElement, code: VerificationIssueCode, title: string, severity?: ServiceIssueSeverity, description?: string, context?: OntoumlElement[]);
    isError(): boolean;
    isWarning(): boolean;
    static createClassIdentityProviderSpecialization(source: Class, specializedUltimateSortals: Class[]): VerificationIssue;
    static createClassMissingNatureRestrictions(source: Class): VerificationIssue;
    static createClassMissingIdentityProvider(source: Class): VerificationIssue;
    static createClassMissingIsExtensional(source: Class): VerificationIssue;
    static createClassMissingIsPowertype(source: Class): VerificationIssue;
    static createClassMissingOrder(source: Class): VerificationIssue;
    static createClassMultipleIdentityProviders(source: Class, specializedUltimateSortals: Class[]): VerificationIssue;
    static createClassNotUniqueStereotype(source: Class): VerificationIssue;
    static createClassInvalidOntoumlStereotype(source: Class): VerificationIssue;
    static createClassNonEnumerationWithLiterals(source: Class): VerificationIssue;
    static createClassEnumerationWithProperties(source: Class): VerificationIssue;
    static createClassIncompatibleNatures(source: Class): VerificationIssue;
    static createGeneralizationInconsistentSpecialization(source: Generalization): VerificationIssue;
    static createGeneralizationIncompatibleNatures(source: Generalization): VerificationIssue;
    static createGeneralizationIncompatibleEnumeration(source: Generalization): VerificationIssue;
    static createGeneralizationIncompatibleDatatype(source: Generalization): VerificationIssue;
    static createGeneralizationIncompatibleClassRigidity(source: Generalization): VerificationIssue;
    static createGeneralizationIncompatibleClassSortality(source: Generalization): VerificationIssue;
    static createGeneralizationIncompatibleGeneralAndSpecificTypes(source: Generalization): VerificationIssue;
    static createGeneralizationCircular(source: Generalization): VerificationIssue;
    static createGeneralizationIncompatibleRelationType(source: Generalization): VerificationIssue;
    static createRelationMultipleStereotypes(source: Relation): VerificationIssue;
    static createRelationMissingIsReadOnly(source: Relation): VerificationIssue;
    static createRelationImproperDerivation(source: Relation): VerificationIssue;
}
