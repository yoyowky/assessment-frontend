import Adapter from '@ember-data/adapter';
import sampleData from "assessment-frontend/models/fixtures/sample-data"

export default class ApplicationAdapter extends Adapter {
  findRecord(store, type, id){
      return new Ember.RSVP.Promise(function(resolve,reject){
          resolve({id, name: `Product ${id.toUpperCase()}`, data: sampleData})
      })
  }
  findAll(store, type){
      return new Ember.RSVP.Promise(function(resolve,reject){
          const data = sampleData;
          resolve([
              { id:"abc", name:"Product ABC", data },
              { id:"123", name:"Product 123", data },
          ])
      })
  }
}