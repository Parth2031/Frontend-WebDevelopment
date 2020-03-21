// TODO:: Singleton Pattern is a type of Module Pattern in which we can it can return only one instance at a time.
// ! So, after repeated calls, It  will return same instance.

const Singleton = ( function ()
{
  let instance;

  function createInstance()
  {
    const object = new Object({name:'Brad'});
    return object;
  }

  return {
    getInstance: () =>
    {
      if(!instance)
        instance = createInstance();
      
      return instance;
    }
  }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA);
console.log(instanceA === instanceB);
