var except = require('expect');
module.exports = {
  rulesSet: function(...rulesSet){
    except(rulesSet).toBeAn('array');
    return rulesSet;
  },
  rules: function(classes,values,responsive){
    except(classes).toBeAn('object');
    except(values).toBeAn('object');
    except(responsive).toBeA('boolean');
    return {classes,values,responsive}
  },
  classes: function(classes){
   except(classes).toBeAn('object');
   return classes;
  },
  properties: function(...properties){
    except(properties).toBeAn('array');
    return properties;
  },
  values: function(values){
    except(values).toBeAn('object');
    return values;
  },
  defaultValue: function(defaultValue){
    return {'':defaultValue};
  },
  responsive: function(responsive){
    except(responsive).toBeA('boolean');
    return responsive;
  }
}
