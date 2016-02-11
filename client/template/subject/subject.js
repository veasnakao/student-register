//subject update onCreate
Template.subjectUpdate.onCreated(function(){
    //static
    //let subjectId = FlowRouter.getParam("id");
    //this.subscribe("subject", subjectId);

    //dynamic
    let subjectId = FlowRouter.getParam("id");
    let selector = {_id: subjectId};
    this.subscribe("subject", selector);
});

//subjectUpdate helpers
Template.subjectUpdate.helpers({
    subjectDoc(){
        let subjectId = FlowRouter.getParam("id");
        return Collection.Subject.findOne(subjectId);
    }
});
AutoForm.hooks({
    subjectInsert: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Subject, 4);
                return doc;
            }
        },
        onSuccess(formType, id){
            //Bert.alert('Successfully Added', 'success', 'growl-top-right');
            FlowRouter.go('subject');
            alertify.success('Add Successfully!');
        },
        onError(formType, error){
            alertify.error('Cancel');
            //Bert.alert(error.message, 'danger', 'growl-top-right')
        }
    },
    subjectUpdate: {
        onSuccess(formType, id){
            //Bert.alert('Successfully Updated', 'success', 'growl-top-right');
            FlowRouter.go('subject');
            alertify.success('Update Successfully!');
        },
        onError(formType, error){
            alertify.error('Cancel');

            //Bert.alert(error.message, 'danger', 'growl-top-right')
        }
    }
});


//subjectAction
Template.subjectAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('subjectUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure?",
            function(){
                Collection.Subject.remove({_id: self._id});
                alertify.success('Delete Successfully!');
            },
            function(){
                alertify.error('Cancel');
            });
    }

});
