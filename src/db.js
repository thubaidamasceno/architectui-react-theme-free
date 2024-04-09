// db.js
import Dexie from 'dexie';

export const db = new Dexie('mied');

db.version(1).stores({
  Materiais: '++Material, NM' // Primary key and indexed props
});


db.version(1).stores({
    friends: '++id, name, age' // Primary key and indexed props
  });