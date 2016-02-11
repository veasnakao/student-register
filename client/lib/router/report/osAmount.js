
//register report
FlowRouter.route('/osAmountRpt/', {
    name:"osAmountRpt",
    action: function(params, queryParams) {
        BlazeLayout.render('mainLayout',{content:"osAmountRpt"});
    }
});

//register report generator
FlowRouter.route('/osAmountRptGen/', {
    name:"osAmountRptGen",
    action: function(params, queryParams) {
        BlazeLayout.render('reportLayout',{content:"osAmountRptGen"});
    }
});



