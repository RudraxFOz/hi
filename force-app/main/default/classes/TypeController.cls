public with sharing class TypeController {
    @AuraEnabled(cacheable=true)
    public static List<Type__c> getTypeList() {
        return [SELECT Id, Name 
        FROM Type__c];
    }
}
