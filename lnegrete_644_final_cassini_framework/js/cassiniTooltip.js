/*global $, jQuery*/
$(function (event) {
    "use strict";
    $.fn.cassiniToolTip = function (toolTipOptions) {
    // default settings for the plugin
        var toolTipDefaults = {
            position: "bottom"
        },
    // extending default settings
        toolTipSettings = $.extend({}, toolTipDefaults, toolTipOptions);

    // HTML markup for tooltip plugin
        var toolTipTemplate = '<div id="cassiniTooltip_wrapper"><span class="cassiniTooltip_text"></span><span class="cassiniTooltip_arrow"></span></div><!-- end cassiniTooltip -->';
    // appending the markup
    $('body').append(toolTipTemplate);
    $(this).each(function() {
    // on hover function
    $(this).hover(function() {
        var toolTipTitle = $(this).attr("title"); // getting current title
        var toTop = $(this).offset().top; // getting current Y axis
        var toLeft = $(this).offset().left; // getting current X axis
        var toolTipHeight = $('#cassiniTooltip_wrapper').css("height"); // getting toolTip Height
        var itemHeight = $(this).css("height"); // getting element Height
        var topFinal;
        if(toolTipSettings.position === 'top') {
            topFinal = parseInt(toTop) - parseInt(toolTipHeight) - 65;
        }
         else
        {
            topFinal = parseInt(toTop) + parseInt(itemHeight) + 15;
        }
        $('.cassiniTooltip_text').html(toolTipTitle); // changes tooltip text to current link title
        $('#cassiniTooltip_wrapper').css("display","block"); // sets tooltip display to block
        $('#cassiniTooltip_wrapper').css({   // sets tooltip left and top position to the current link position
            top: topFinal,
            left: toLeft
        });
    },function() {
  $('#cassiniTooltip_wrapper').css("display","none");  // this hides tooltip after hover is done
    });
    });
    }
    })(jQuery);