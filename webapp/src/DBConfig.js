export const DBConfig = {
  name: 'MyDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'data',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'progress', keypath: 'progress', options: { unique: false } },
        { name: 'company', keypath: 'company', options: { unique: false } },
        { name: 'jobDescription', keypath: 'jobDescription', options: { unique: false } },
        { name: 'notes', keypath: 'notes', options: { unique: false } },
      ]
    }
  ]
}