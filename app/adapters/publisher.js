import Adapter from '@ember-data/adapter';

export default class ApplicationAdapter extends Adapter {
  findRecord(store, type, id){
      return new Ember.RSVP.Promise(function(resolve,reject){
          resolve({
            id,
            title: "XYZ Corp",
            deliveryFrequency: "daily",
            dataFrequency: "weekly",
            reportingLag: "12 hours",
            history: "2005-11-01",
            coverage: "5000+ companies, 59 indicators",
          })
      })
  }
}