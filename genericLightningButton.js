({
  doInit: function(component, event, helper) {
    component.set(
      "v.codeSnippet",
      '<lightning:button  variant= "' +
        component.get("v.genericVariantValue") +
        '"  label= "' +
        component.get("v.genericLabel") +
        '"  title= "' +
        component.get("v.genericTitle") +
        '"  disabled= "' +
        component.get("v.disableValue") +
        '" />'
    );
  },
  handleOptionsChange: function(component, event, helper) {
    var selectedOptionValue = event.getParam("value");
    component.set("v.genericVariantValue", selectedOptionValue);
    var a = component.get("c.doInit");
    $A.enqueueAction(a);
  },
  handleReset: function(component, event, helper) {
    $A.get("e.force:refreshView").fire();
  },
  handleLabelInputChange: function(component, event, helper) {
    var inputVal = component.find("labelName").get("v.value");
    if (inputVal == null || inputVal == undefined || inputVal == "") {
      component.set("v.genericLabel", "My Label");
    } else {
      component.set("v.genericLabel", inputVal);
    }
    var a = component.get("c.doInit");
    $A.enqueueAction(a);
  },
  handleTitlelInputChange: function(component, event, helper) {
    var inputVal = component.find("titleName").get("v.value");
    if (inputVal == null || inputVal == undefined || inputVal == "") {
      component.set("v.genericTitle", "My Title");
    } else {
      component.set("v.genericTitle", inputVal);
    }
    var a = component.get("c.doInit");
    $A.enqueueAction(a);
  },
  handleCheckbox: function(component, event, helper) {
    var checkVal = component.find("chkbox").get("v.value");
    component.set("v.disableValue", checkVal);
    var a = component.get("c.doInit");
    $A.enqueueAction(a);
  }
});
