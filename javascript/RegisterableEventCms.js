;(function ($) {
	$("#Form_EditForm_RegEmailConfirm").live("click", function() {
		$("#AfterConfirmTitle, #AfterConfirmContent").toggle($(this).is(":checked"));
	});

	$("#Form_EditForm_RegEmailConfirm").livequery(function() {
		$("#AfterConfirmTitle, #AfterConfirmContent").toggle($(this).is(":checked"));
	});

	$("#Form_EditForm_UnRegEmailConfirm").live("click", function() {
		$("#AfterConfUnregTitle, #AfterConfUnregContent").toggle($(this).is(":checked"));
	});

	$("#Form_EditForm_UnRegEmailConfirm").livequery(function() {
		$("#AfterConfUnregTitle, #AfterConfUnregContent").toggle($(this).is(":checked"));
	});

	$("#Form_EditForm_EmailNotifyChanges").live("click", function() {
		$("#NotifyChangeFields").toggle($(this).is(":checked"));
	});

	$("#Form_EditForm_EmailNotifyChanges").livequery(function() {
		$("#NotifyChangeFields").toggle($(this).is(":checked"));
	});
})(jQuery);