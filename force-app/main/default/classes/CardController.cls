public with sharing class CardController {
    @AuraEnabled(cacheable=true)
    public static List<Card__c> getCardList() {
        return [ SELECT LeadId__c, TypeId__c, Name, Description__c                  
         FROM Card__c];
    }
}
