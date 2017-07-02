
        $(function () {
            $(".standard_divpage2").width($(window).width() - 51);
            $(window).resize(function () {
                $(".standard_divpage2").width($(window).width() - 51);
            });
            $(".standard_divpage2").height($(window).height() - 32);
            $(window).resize(function () {
                $(".standard_divpage2").height($(window).height() - 32);
            });
            function scale_profile2() {
                $(".profile_divchua").width($(".standard_divpage2_divcontent").width() - 40);
                $(window).resize(function () {
                    $(".profile_divchua").width($(".standard_divpage2_divcontent").width() - 40);
                });
                $(".profile_tab_divchua_divbgwhite_user").css({ "height": "39px", "background-color": "White" });
                $(".profile_tab_divchua_innitial").css({ "background-color": "#FAFAFA", "border-top": "3px solid #3498db", "margin-top": "0px", "-webkit-box-shadow": "0px -2px 2px 0px rgba(171,171,171,1", "box-shadow": "0px -2px 2px 0px rgba(171,171,171,1", "-moz-box-shadow": "0px -2px 2px 0px rgba(171,171,171,1" });

                $(".profile_divchuacv_divright_divchuainformation").width($(".profile_divchua").width() - 330);
                $(window).resize(function () {
                    $(".profile_divchuacv_divright_divchuainformation").width($(".profile_divchua").width() - 330);
                });
                $(".profile_divchuacv_divright_divchuainformation_divchuaitem_right").width($(".profile_divchuacv_divright_divchuainformation").width() - 120);
                $(window).resize(function () {
                    $(".profile_divchuacv_divright_divchuainformation_divchuaitem_right").width($(".profile_divchuacv_divright_divchuainformation").width() - 120);
                });

                $(".profile_divchuacv_divright").width($(".profile_divchua").width() - 300);
                $(window).resize(function () {
                    $(".profile_divchuacv_divright").width($(".profile_divchua").width() - 300);
                });

                $(".profile_divchuacv_divleft_divelement_divright").width($(".profile_divchuacv_divright").width() - 25);
                $(window).resize(function () {
                    $(".profile_divchuacv_divleft_divelement_divright").width($(".profile_divchuacv_divright").width() - 25);
                });

                // $(".profile_divchuacv_divright_divchuaelement_divchuarecentactivity_right").width($(".profile_divchuacv_divright").width() - 240);
                // $(window).resize(function () {
                //     $(".profile_divchuacv_divright_divchuaelement_divchuarecentactivity_right").width($(".profile_divchuacv_divright").width() - 240);
                // });

                $(".profile_divinfo_divright").width($(".profile_divinfo").width() - 252);
                $(window).resize(function () {
                    $(".profile_divinfo_divright").width($(".profile_divinfo").width() - 252);
                });

                $(".profile_divinfo_divright_content_divelement_divchuainfo").width($(".profile_divinfo_divright_content_divelement").width() - 260);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divelement_divchuainfo").width($(".profile_divinfo_divright_content_divelement").width() - 260);
                });

                $(".profile_divinfo_divright_content_divelement_divchuainfo_table_cellright_tb").width($(".profile_divinfo_divright_content_divelement_divchuainfo").width() - 180);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divelement_divchuainfo_table_cellright_tb").width($(".profile_divinfo_divright_content_divelement_divchuainfo").width() - 180);
                });

                $(".profile_divinfo_divright_content_divelement_divchuainfo_table_cellright_tb").width($(".profile_divinfo_divright_content_divelement_divchuainfo").width() - 180);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divelement_divchuainfo_table_cellright_tb").width($(".profile_divinfo_divright_content_divelement_divchuainfo").width() - 180);
                });


                $(".profile_divinfo_divright_content_divelement_divright").width($(".profile_divinfo_divright_content_divelement").width() - 340);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divelement_divright").width($(".profile_divinfo_divright_content_divelement").width() - 340);
                });

                $(".profile_divinfo_divright_content_divelement_divleft_table_cellright_tb").width($(".profile_divinfo_divright_content_divelement_divleft").width() - 120);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divelement_divleft_table_cellright_tb").width($(".profile_divinfo_divright_content_divelement_divleft").width() - 120);
                });

                $(".profile_divinfo_divright_content_divelement_divright_divelement_divright").width($(".profile_divinfo_divright_content_divelement_divright_divelement").width() - 200);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divelement_divright_divelement_divright").width($(".profile_divinfo_divright_content_divelement_divright_divelement").width() - 200);
                });

                $(".profile_divinfo_divright_content_divelement_divright_divelement_divright_divelement_divright").width($(".profile_divinfo_divright_content_divelement_divright_divelement_divright_divelement").width() - 50);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divelement_divright_divelement_divright_divelement_divright").width($(".profile_divinfo_divright_content_divelement_divright_divelement_divright_divelement").width() - 50);
                });

                $(".profile_divinfo_divright_content_divleft2").width($(".profile_divinfo_divright_content_divelement").width() - 300);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divleft2").width($(".profile_divinfo_divright_content_divelement").width() - 300);
                });

                $(".profile_divinfo_divright_content_divleft2_divelement_tb").width($(".profile_divinfo_divright_content_divleft2_divelement").width() - 160);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divleft2_divelement_tb").width($(".profile_divinfo_divright_content_divleft2_divelement").width() - 160);
                });

                $(".profile_divinfo_divright_content_divleft2_divelement_ta").width($(".profile_divinfo_divright_content_divleft2_divelement").width() - 160);
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divleft2_divelement_ta").width($(".profile_divinfo_divright_content_divleft2_divelement").width() - 160);
                });

                $(".profile_divinfo_divright_content_divleft2_divelement_tb_content").width($(".profile_divinfo_divright_content_divleft2_divelement_ta").width());
                $(window).resize(function () {
                    $(".profile_divinfo_divright_content_divleft2_divelement_tb_content").width($(".profile_divinfo_divright_content_divleft2_divelement_ta").width());
                });
            };
            scale_profile2();


            function animate_personalpage() {
                $(".social_personalpage_divchua").css({ "margin-top": "2px", "display": "none" });
                $(window).resize(function () {
                    $(".social_personalpage_divchua").css("margin-top", $(window).height() - 51);
                });
                $(".widget_calendar_right_divmid_divthang_lb,.widget_calendar_right_divmid_divthang_lb1").on("click", function (event) {
                    event.preventDefault();
                });
                $(".social_divleft_divhome_divscroll_divelement_divright_lb,.social_divleft_divhome_divscroll_divelement_divright_lbsub").on("click", function (event) {
                    event.preventDefault();
                    $(".social_personalpage_divchua").fadeIn();
                });
                $(".social_personalpage_divtop").on("click", function (event) {
                    event.preventDefault();
                    $(".social_personalpage_divchua").fadeOut();
                });
            };
            animate_personalpage();
            function animate_calendar() {

            };
            function animate_personalpage2() {
                $(".social_personalpage_divchua2").css({ "margin-top": "2px", "display": "block" });
                $(window).resize(function () {
                    $(".social_personalpage_divchua").css("margin-top", $(window).height() - 51);
                });

            };

            animate_personalpage2();
            animate_calendar();
            function scale_social() {
                if ($(window).width() >= 1260) {
                    $(".social_divright_newfeed_divchua_divnewfeed").width($(window).width() - 720);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_new").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_lbbottom").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 22);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_im").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 100);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_im").css("margin-left", "46px");
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbreadcommnet").width() - 140);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 68);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width() - 100);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_divchuacontrolcomment").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_ta").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width() - 22);
                    $(".social_divleft_divchua").height($(window).height() - 50);
                    $(".social_divright_newfeed_divchua_divactivity_divaday").width($(".social_divright_newfeed_divchua_divactivity").width() - 40);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost").width($(".social_divright_newfeed_divchua_divactivity_divaday").width() - 51);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung").width($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost").width() - 49);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung_divchuanoidungthatsu").width($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung").width() - 20);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divchuamoc").css("margin-left", -($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung").width() + 10));
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung_divchuanoidungthatsu_divsub_lbnoidung").width($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung_divchuanoidungthatsu").width() - 22);
                    $(".social_divright_newfeed_divchua_divactivity_divasuggest").width($(".social_divright_newfeed_divchua_divactivity").width() - 40);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuasuggest").width($(".social_divright_newfeed_divchua_divactivity_divasuggest").width() - 0);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuasuggest_divnoidung").width($(".social_divright_newfeed_divchua_divactivity_divaday_divchuasuggest").width() - 80);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuasuggest_divchuamoc").css("margin-left", -($(".social_divright_newfeed_divchua_divactivity_divaday_divchuasuggest_divnoidung").width() + 10));
                    $(window).resize(function () {
                        if ($(window).width() < 1260) {
                            $(".social_divright_newfeed_divchua").width($(window).width() - 300);
                            $(".social_divright_newfeed_divchua_divnewfeed").width($(window).width() - 320);
                            $(".social_divright_newfeed_divchua_divactivity").css("display", "none");
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_new").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_lbbottom").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 22);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_im").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 140);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_im").css("margin-left", "66px");
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbreadcommnet").width() - 140);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 68);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width() - 100);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_divchuacontrolcomment").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_ta").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width() - 22);
                        }
                        else {
                            $(".social_divright_newfeed_divchua").width($(window).width() - 300);
                            $(".social_divright_newfeed_divchua_divnewfeed").width($(window).width() - 720);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_new").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_lbbottom").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                            $(".social_divright_newfeed_divchua_divactivity").css("display", "block");
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 22);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_im").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 100);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_im").css("margin-left", "46px");
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbreadcommnet").width() - 140);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 68);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width() - 100);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_divchuacontrolcomment").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                            $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_ta").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width() - 22);

                        }
                    });
                    $(".social_divleft_divchua").height($(window).height() - 50);
                    $(".social_divright_newfeed_divchua").width($(window).width() - 300);
                    $(".social_divleft_divhome").height($(window).height() - 108);
                    $(".social_divleft_divhome_divscroll").height($(window).height() - 246);
                }
                else {
                    $(".social_divleft_divchua").height($(window).height() - 50);
                    $(".social_divright_newfeed_divchua").width($(window).width() - 51);
                    $(".social_divright_newfeed_divchua").css("margin-left", "0px");
                    $(".social_divleft_divhome").height($(window).height() - 108);
                    $(".social_divleft_divhome_divscroll").height($(window).height() - 296);
                    $(".social_divright_newfeed_divchua_divnewfeed").width($(window).width() - 460);
                    $(".social_divright_newfeed_divchua_divnewfeed").css("margin-left", "0px");
                    $(".social_divleft_divchua").css("display", "none");
                    $(".social_divright_newfeed_divchua_divactivity_divaday").width($(".social_divright_newfeed_divchua_divactivity").width() - 40);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost").width($(".social_divright_newfeed_divchua_divactivity_divaday").width() - 51);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung").width($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost").width() - 49);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung_divchuanoidungthatsu").width($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung").width() - 20);
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divchuamoc").css("margin-left", -($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung").width() + 10));
                    $(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung_divchuanoidungthatsu_divsub_lbnoidung").width($(".social_divright_newfeed_divchua_divactivity_divaday_divchuapost_divnoidung_divchuanoidungthatsu").width() - 22);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_new").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_lbbottom").width($(".social_divright_newfeed_divchua_divnewfeed").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 22);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_im").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_tb").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbreadcommnet").width() - 140);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divtitle_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 68);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement_divright").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width() - 100);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment_divelement").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divchuacomment").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_divchuacontrolcomment").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite").width() - 40);
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_ta").width($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent").width() - 22);
                    $(".social_divleft_divhome_divscroll").css("width", "250px");
                }
            };
            function social_enableswitch_onstart() {
                if ($(window).width() >= 1280) {
                    $(".social_divleft_divhome_divscroll_divchuaswitch_xanh").children().next().css({ "background-color": "#7986CB", "border": "1px solid #5C6BC0" });
                    $(".social_divleft_divhome_divscroll_divchuaswitch_xanh").children().next().children().css({ "background-color": "#3F51B5", "border": "1px solid #3949AB", "margin-left": "12px" });
                    $(".social_divleft_divhome_divscroll_divchuaswitch_cam").children().next().css({ "background-color": "#FFB74D", "border": "1px solid #FFA726" });
                    $(".social_divleft_divhome_divscroll_divchuaswitch_cam").children().next().children().css({ "background-color": "#FF9800", "border": "1px solid #FB8C00", "margin-left": "12px" });
                    $(".social_divleft_divhome_divscroll_divchuaswitch_tim").children().next().css({ "background-color": "#4DB6AC", "border": "1px solid #26A69A" });
                    $(".social_divleft_divhome_divscroll_divchuaswitch_tim").children().next().children().css({ "background-color": "#009688", "border": "1px solid #00897B", "margin-left": "12px" });
                }
            };
            social_enableswitch_onstart();
            scale_social();
            function animate_social() {
                var i = 0;
                var k = 1;
                var m = 1;
                var n = 1;


                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbreadcommnet").on("click", function (event) {
                    event.preventDefault();

                    $(this).parent().prev().css({ "height": $(this).parent().prev().children().height() });
                    $(this).css("display", "none");


                });

                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbreadmore").on("click", function (event) {
                    event.preventDefault();
                    $(this).parent().next().next().toggle();


                });

                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_divchuacontrolcomment").css("display", "none");
                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbchung_im").mouseover(function () {
                    $(this).prev().css("background-color", "#E0E0E0");
                }).mouseout(function () {
                    $(this).prev().css("background-color", "#EEEEEE");
                });
                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbchung").mouseover(function () {
                    $(this).css("background-color", "#E0E0E0");
                }).mouseout(function () {
                    $(this).css("background-color", "#EEEEEE");
                });

                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbchung_im2").mouseover(function () {
                    $(this).prev().css("background-color", "#E0E0E0");
                }).mouseout(function () {
                    $(this).prev().css("background-color", "#EEEEEE");
                });
                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbchung2").mouseover(function () {
                    $(this).css("background-color", "#E0E0E0");
                }).mouseout(function () {
                    $(this).css("background-color", "#EEEEEE");
                });

                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbchung_im3").mouseover(function () {
                    $(this).prev().css("background-color", "#E0E0E0");
                }).mouseout(function () {
                    $(this).prev().css("background-color", "#EEEEEE");
                });
                $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontrol_lbchung3").mouseover(function () {
                    $(this).css("background-color", "#E0E0E0");
                }).mouseout(function () {
                    $(this).css("background-color", "#EEEEEE");
                });

                $(".social_divleft_divtop_divgiua_lbhome").next().css("background-color", "rgb(36,48,60)");
                $(".social_divleft_divtop_divgiua_lbhome").next().next().css("background-color", "White");
                $(".social_divleft_divtop_divgiua_lbhome,.social_divleft_divtop_divgiua_lb,.social_divleft_divtop_divgiua_lb2").on("click", function (event) {
                    event.preventDefault();
                    $(".social_divleft_divtop_divgiua_lbhome,.social_divleft_divtop_divgiua_lb,.social_divleft_divtop_divgiua_lb2").css("color", "rgb(146,151,157)");
                    $(".social_divleft_divtop_divgiua_divborder1,.social_divleft_divtop_divgiua_divborder2,.social_divleft_divtop_divgiua_divborder12,.social_divleft_divtop_divgiua_divborder22").css("background-color", "transparent");
                    $(this).css("color", "White");
                    $(this).next().css("background-color", "rgb(36,48,60)");
                    $(this).next().next().css("background-color", "White");
                });
                $(".social_divleft_divhome_divscroll_divelement_divright").mouseover(function () {
                    $(this).children().css("color", "white");
                    $(this).children().next().css("color", "white");
                }).mouseout(function () {
                    $(this).children().css("color", "#424242");
                    $(this).children().next().css("color", "#BDBDBD");
                });
                $(".social_divleft_divhome_divscroll_divchuaswitch_hong").on("click", function () {
                    if (i % 2 == 0) {
                        $(this).children().next().css({ "background-color": "#F06292", "border": "1px solid #EC407A" });
                        $(this).children().next().children().css({ "background-color": "#E91E63", "border": "1px solid #D81B60" });
                        $(this).children().next().children().animate({ "margin-left": "12px" }, 400);

                        i = i + 1;
                    }
                    else {
                        $(this).children().next().css({ "background-color": "#E0E0E0", "border": "1px solid #BDBDBD" });
                        $(this).children().next().children().css({ "background-color": "#EEEEEE", "border": "1px solid #BDBDBD" });
                        $(this).children().next().children().animate({ "margin-left": "-2px" }, 400);

                        i = i + 1;
                    }
                });
                $(".social_divleft_divhome_divscroll_divchuaswitch_xanh").on("click", function () {
                    if (k % 2 == 0) {
                        $(this).children().next().css({ "background-color": "#7986CB", "border": "1px solid #5C6BC0" });
                        $(this).children().next().children().css({ "background-color": "#3F51B5", "border": "1px solid #3949AB" });
                        $(this).children().next().children().animate({ "margin-left": "12px" }, 400);
                        $(".social_divright_newfeed_divchua_divnewfeed").css("display", "block");
                        k = k + 1;
                    }
                    else {
                        $(this).children().next().css({ "background-color": "#E0E0E0", "border": "1px solid #BDBDBD" });
                        $(this).children().next().children().css({ "background-color": "#EEEEEE", "border": "1px solid #BDBDBD" });
                        $(this).children().next().children().animate({ "margin-left": "-2px" }, 400);
                        $(".social_divright_newfeed_divchua_divnewfeed").css("display", "none");
                        k = k + 1;
                    }
                });
                if ($(window).width() >= 1280) {
                    $(".social_divleft_divhome_divscroll_divchuaswitch_cam").on("click", function () {
                        if (m % 2 == 0) {
                            $(this).children().next().css({ "background-color": "#FFB74D", "border": "1px solid #FFA726" });
                            $(this).children().next().children().css({ "background-color": "#FF9800", "border": "1px solid #FB8C00" });
                            $(this).children().next().children().animate({ "margin-left": "12px" }, 400);
                            $(".social_divright_newfeed_divchua_divactivity").fadeIn(600);
                            m = m + 1;
                        }
                        else {
                            $(this).children().next().css({ "background-color": "#E0E0E0", "border": "1px solid #BDBDBD" });
                            $(this).children().next().children().css({ "background-color": "#EEEEEE", "border": "1px solid #BDBDBD" });
                            $(this).children().next().children().animate({ "margin-left": "-2px" }, 400);
                            $(".social_divright_newfeed_divchua_divactivity").fadeOut(600);
                            m = m + 1;
                        }
                    });
                }
                $(".social_divleft_divhome_divscroll_divchuaswitch_tim").on("click", function () {
                    if (n % 2 == 0) {
                        $(this).children().next().css({ "background-color": "#4DB6AC", "border": "1px solid #26A69A" });
                        $(this).children().next().children().css({ "background-color": "#009688", "border": "1px solid #00897B" });
                        $(this).children().next().children().animate({ "margin-left": "12px" }, 400);
                        $(".social_divleft_divchua").animate({ "margin-left": "0" }, 300);
                        n = n + 1;
                    }
                    else {
                        $(this).children().next().css({ "background-color": "#E0E0E0", "border": "1px solid #BDBDBD" });
                        $(this).children().next().children().css({ "background-color": "#EEEEEE", "border": "1px solid #BDBDBD" });
                        $(this).children().next().children().animate({ "margin-left": "-2px" }, 400);
                        $(".social_divleft_divchua").animate({ "margin-left": "-250" }, 300);
                        n = n + 1;
                    }
                });
                if ($(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_lbl").height() < 21) {
                    $(".social_divright_newfeed_divchua_divnewfeed_divwrite_divcontent_lbl").parent().css("height", $(this).height());
                }
            };
            animate_social();

            var i = 1;
            $(".blog_divtop_divleft_imbt").on("click", function (event) {
                event.preventDefault();
                if (i % 2 == 1) {
                    $(".blog_divleft").css("display", "block");
                    $(".blog_divright").width($(window).width() - 301);
                    $(".blog_divfakeboxshadow2").width($(".blog_divright").width());
                    $(".blog_divright_pc").width($(window).width() - 320);
                    $(window).resize(function () {
                        $(".blog_divright").width($(window).width() - 301);
                    });
                    $(window).resize(function () {
                        $(".blog_divright_pc").width($(window).width() - 320);
                    });
                    if (($(window).width() - 1025) < 0) {
                        $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 920) / 2);
                    }
                    else {
                        $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 1220) / 2);
                    }
                    $(".blog_divright_pc_divcenterpivot").height($(".blog_divright").height());
                    $(window).resize(function () {
                        if (($(window).width() - 1025) < 0) {
                            $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 920) / 2);
                        }
                        else {
                            $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 1260) / 2);
                        }
                        $(".blog_divright").height($(".blog_divright_pc").height());
                        $(".blog_divleft").height($(".blog_divright_pc").height());
                        $(".blog_divleft_divbottom").height($(".blog_divright_pc").height() - 70);
                        $(".blog_divfakeboxshadow_doc").height($(".blog_divleft").height() - 68);
                    });
                    $(".blog_divright").height($(".blog_divright_pc").height());
                    $(".blog_divleft").height($(".blog_divright_pc").height());
                    $(".blog_divleft_divbottom").height($(".blog_divright_pc").height() - 70);
                    $(".blog_divfakeboxshadow_doc").height($(".blog_divleft").height() - 68);
                    i++;
                }
                else {
                    $(".blog_divleft").css("display", "none");
                    $(".blog_divright").width($(window).width() - 51);
                    $(".blog_divright_pc").width($(window).width() - 70);
                    $(".blog_divfakeboxshadow2").width($(".blog_divright").width());
                    $(window).resize(function () {
                        $(".blog_divright").width($(window).width() - 51);
                    });
                    $(window).resize(function () {
                        $(".blog_divright_pc").width($(window).width() - 70);
                    });
                    if (($(window).width() - 1025) < 0) {
                        $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 972) / 2);
                    }
                    else {
                        $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 1276) / 2);
                    }
                    $(".blog_divright_pc_divcenterpivot").height($(".blog_divright").height());
                    $(window).resize(function () {
                        if (($(window).width() - 1025) < 0) {
                            $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 972) / 2);
                        }
                        else {
                            $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 1280) / 2);
                        }
                        $(".blog_divright").height($(".blog_divright_pc").height());
                        $(".blog_divleft").height($(".blog_divright_pc").height());
                        $(".blog_divleft_divbottom").height($(".blog_divright_pc").height() - 70);
                        $(".blog_divfakeboxshadow_doc").height($(".blog_divleft").height() - 68);
                    });
                    $(".blog_divright").height($(".blog_divright_pc").height());
                    $(".blog_divleft").height($(".blog_divright_pc").height());
                    $(".blog_divleft_divbottom").height($(".blog_divright_pc").height() - 70);
                    $(".blog_divfakeboxshadow_doc").height($(".blog_divleft").height() - 68);
                    i++;
                }
            });
            $(".blog_divleft_divbottom_divchua_category2").hide();
            $(".blog_divleft_divbottom_divchua_category3").hide();
            $(".blog_divleft_divbottom_masteritem_master_imbt1").on("click", function (event) {
                event.preventDefault();
                $(".blog_divleft_divbottom_divchua_category2").not($(this).parent().next()).slideUp();
                $(this).parent().next().slideToggle();
            });
            $(".blog_divleft_divbottom_masteritem_master_lbtieude").on("click", function (event) {
                event.preventDefault();
                $(".blog_divleft_divbottom_divchua_category2").not($(this).parent().next()).slideUp();
                $(".blog_divleft_divbottom_divchua_category3").not($(this).parent().next()).slideUp();
                $(this).parent().next().slideToggle();
            });
            $(".blog_divleft_divbottom_divchua_category_divchuaitem_lbtieude").on("click", function (event) {
                event.preventDefault();
                $(".blog_divleft_divbottom_divchua_category_divchuasubitem").not($(this).parent().next()).slideUp();
                $(this).parent().next().slideToggle();
            });
            $(".blog_divleft_divbottom_divchua_category_divchuasubitem").hide();
            $(".blog_divleft_divbottom_divchua_category_divchuaitem_imbtsub").on("click", function (event) {
                event.preventDefault();
                $(".blog_divleft_divbottom_divchua_category_divchuasubitem").not($(this).parent().next()).slideUp();
                $(this).parent().next().slideToggle();
            });
            $(".blog_divleft_divbottom_masteritem_master_category").on("click", function (event) {
                event.preventDefault();
                $(".blog_divleft_divbottom_divchua_category").slideToggle();
            });
            $(".blog_divtop_divright_lb,.blog_divtop_divright_lb_initial").on("click", function (event) {
                event.preventDefault();
                $(".blog_divtop_divright_lb,.blog_divtop_divright_lb_initial").css({ "background-color": "rgb(70,90,101)", "color": "white" });
                $(this).css({ "background-color": "rgb(84,108,120)", "color": "White" });
                $(".blog_divcontent1,.blog_divcontent2,.blog_divcontent3").fadeIn(1200);
            });
            $(".blog_divcontent1,.blog_divcontent2,.blog_divcontent3,.blog_divcontent4").fadeIn(1200);
            $(".blog_divright").width($(window).width() - 51);
            $(window).resize(function () {
                $(".blog_divright").width($(window).width() - 51);
            });
            $(".blog_divright_pc").width($(window).width() - 70);
            $(window).resize(function () {
                $(".blog_divright_pc").width($(window).width() - 70);
            });
            if (($(window).width() - 1025) < 0) {
                $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 972) / 2);
            }
            else {
                $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 1276) / 2);
            }
            $(".blog_divright_pc_divcenterpivot").height($(".blog_divright").height());
            $(window).resize(function () {
                if (($(window).width() - 1025) < 0) {
                    $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 972) / 2);
                }
                else {
                    $(".blog_divright_pc_divcenterpivot").css("width", ($(window).width() - 1280) / 2);
                }
                $(".blog_divright").height($(".blog_divright_pc").height());
                $(".blog_divleft").height($(".blog_divright_pc").height());
                $(".blog_divleft_divbottom").height($(".blog_divright_pc").height() - 70);
                $(".blog_divfakeboxshadow_doc").height($(".blog_divleft").height() - 68);
            });
            $(".blog_divright").height($(".blog_divright_pc").height());
            $(".blog_divleft").height($(".blog_divright_pc").height());
            $(".blog_divleft_divbottom").height($(".blog_divright_pc").height() - 70);
            $(".blog_divfakeboxshadow_doc").height($(".blog_divleft").height() - 68);
            $(".blog_divleft_divtop_divbt_s").mouseover(function () {
                $(".blog_divleft_divtop_lblsearch").show();
            }).mouseout(function () {
                $(".blog_divleft_divtop_lblsearch").hide();
            });
            $(".blog_divleft_divtop_divbt_d").mouseover(function () {
                $(".blog_divleft_divtop_lbldocu").show();
            }).mouseout(function () {
                $(".blog_divleft_divtop_lbldocu").hide();
            });
            $(".blog_divleft_divtop_divbt_m").mouseover(function () {
                $(".blog_divleft_divtop_lblmyblog").show();
            }).mouseout(function () {
                $(".blog_divleft_divtop_lblmyblog").hide();
            });
            $(".blog_divleft_divtop_divbt_c").mouseover(function () {
                $(".blog_divleft_divtop_lblcompose").show();
            }).mouseout(function () {
                $(".blog_divleft_divtop_lblcompose").hide();
            });
            $(".blog_divleft_divtop_lblmyblog").hide();
            $(".blog_divleft_divtop_lblcompose").hide();
            $(".blog_divleft_divtop_lbldocu").hide();
            $(".blog_divleft_divtop_lblsearch").hide();


            $(".profile_tab_imbt").on("click", function (event) {
                event.preventDefault();
                $(".profile_tab_divchua_divbgwhite_user").css({ "height": "38px", "background-color": "#F5F5F5" });
                $(".profile_tab_divchua_divbgwhite").css({ "height": "38px", "background-color": "#F5F5F5" });
                $(".profile_tab_divchua_innitial,.profile_tab_divchua2,.profile_tab_divchua").css({ "background-color": "#F5F5F5", "border-top": "1px solid #3498db", "margin-top": "2px", "-webkit-box-shadow": "none", "box-shadow": "none", "-moz-box-shadow": "none" });
                $(this).parent().css({ "height": "39px", "background-color": "White" });
                $(this).parent().parent().css({ "background-color": "#FAFAFA", "border-top": "3px solid #3498db", "margin-top": "0px", "-webkit-box-shadow": "0px -2px 2px 0px rgba(171,171,171,1", "box-shadow": "0px -2px 2px 0px rgba(171,171,171,1", "-moz-box-shadow": "0px -2px 2px 0px rgba(171,171,171,1" });
            });
            $(".profile_tab_lb").on("click", function (event) {
                event.preventDefault();
                $(".profile_tab_divchua_divbgwhite_user").css({ "height": "38px", "background-color": "#F5F5F5" });
                $(".profile_tab_divchua_divbgwhite").css({ "height": "38px", "background-color": "#F5F5F5" });
                $(".profile_tab_divchua_innitial,.profile_tab_divchua2,.profile_tab_divchua").css({ "background-color": "#F5F5F5", "border-top": "1px solid #3498db", "margin-top": "2px", "-webkit-box-shadow": "none", "box-shadow": "none", "-moz-box-shadow": "none" });
                $(this).parent().css({ "height": "39px", "background-color": "White" });
                $(this).parent().parent().css({ "background-color": "#FAFAFA", "border-top": "3px solid #3498db", "margin-top": "0px", "-webkit-box-shadow": "0px -2px 2px 0px rgba(171,171,171,1", "box-shadow": "0px -2px 2px 0px rgba(171,171,171,1", "-moz-box-shadow": "0px -2px 2px 0px rgba(171,171,171,1" });
            });

            $(".standard_divpage").width($(window).width() - 51);
            $(window).resize(function () {
                $(".standard_divpage").width($(window).width() - 51);
            });
            $(".datapage_divright_view_standardpagecontent_divchuacomment_item_right_bottom_right").width($(window).width() - 594);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuacomment_item_right_bottom_right").width($(window).width() - 594);
            });
            $(".datapage_divright_view_standardpagecontent_divchuacomment_item_right").width($(window).width() - 577);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuacomment_item_right").width($(window).width() - 577);
            });
            $(".datapage_divright_view_standardpagecontent_divchuacomment_item").width($(window).width() - 528);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuacomment_item").width($(window).width() - 528);
            });
            $(".datapage_divright_view_standardpagecontent_divchuacomment_divtop_tb").width($(window).width() - 548);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuacomment_divtop_tb").width($(window).width() - 548);
            });
            $(".datapage_divright_view_standardpagecontent_divchuacomment").width($(window).width() - 506);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuacomment").width($(window).width() - 506);
            });
            $(".datapage_divright_view_standardpagecontent_divchuatb_tbsearch").width($(window).width() - 526);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuatb_tbsearch").width($(window).width() - 526);
            });
            $(".datapage_divright_view_standardpagecontent_divchuatb").width($(window).width() - 504);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuatb").width($(window).width() - 504);
            });
            $(".datapage_divright_view_standardpagecontent_divupdate_item_cam").width($(window).width() - 510);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divupdate_item_cam").width($(window).width() - 510);
            });
            $(".datapage_divright_view_standardpagecontent_divupdate_item_do").width($(window).width() - 510);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divupdate_item_do").width($(window).width() - 510);
            });
            $(".datapage_divright_view_standardpagecontent_divupdate_item_xanhla").width($(window).width() - 510);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divupdate_item_xanhla").width($(window).width() - 510);
            });
            $(".datapage_divright_view_standardpagecontent_divupdate_item_xanh").width($(window).width() - 510);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divupdate_item_xanh").width($(window).width() - 510);
            });
            $(".datapage_divright_view_standardpagecontent_divupdate_item_tim").width($(window).width() - 510);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divupdate_item_tim").width($(window).width() - 510);
            });
            $(".datapage_divright_view_standardpagecontent_divupdate").width($(window).width() - 504);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divupdate").width($(window).width() - 504);
            });
            $(".datapage_divright_view_standardpagecontent_table_cell_name").width($(window).width() - 823);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_table_cell_name").width($(window).width() - 823);
            });
            $(".datapage_divright_view_standardpagecontent_table").width($(window).width() - 447);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_table").width($(window).width() - 447);
            });
            $(".datapage_divright_view_standardpagecontent_divchuatablecontent").width($(window).width() - 445);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuatablecontent").width($(window).width() - 445);
            });
            $(".datapage_divright_view_standardpagecontent_divchuatable").width($(window).width() - 405);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent_divchuatable").width($(window).width() - 405);
            });
            $(".datapage_divright_view_standardpagecontent").width($(window).width() - 403);
            $(window).resize(function () {
                $(".datapage_divright_view_standardpagecontent").width($(window).width() - 403);
            });
            $(".datapage_divright_divoverviewcontent_lboverview").width($(window).width() - 465);
            $(window).resize(function () {
                $(".datapage_divright_divoverviewcontent_lboverview").width($(window).width() - 465);
            });
            $(".datapage_divright_view_pagenameholder").width($(window).width() - 405);
            $(window).resize(function () {
                $(".datapage_divright_view_pagenameholder").width($(window).width() - 405);
            });
            $(".datapage_divright_view").width($(window).width() - 398);
            $(window).resize(function () {
                $(".datapage_divright_view").width($(window).width() - 398);
            });
            $(".datapage_divright").width($(window).width() - 348);
            $(window).resize(function () {
                $(".datapage_divright").width($(window).width() - 348);
            });
            $(".datapage_divchua").width($(window).width() - 51);
            $(window).resize(function () {
                $(".datapage_divchua").width($(window).width() - 51);
            });
            $(".mailpage_congcuright_composenewmail_divchuacontrolcompose").width($(window).width() - 430);
            $(window).resize(function () {
                $(".mailpage_congcuright_composenewmail_divchuacontrolcompose").width($(window).width() - 430);
            });
            $(".mailpage_congcuright_composenewmail_tb2").width($(window).width() - 520);
            $(window).resize(function () {
                $(".mailpage_congcuright_composenewmail_tb2").width($(window).width() - 520);
            });
            $(".mailpage_congcuright_composenewmail_tb").width($(window).width() - 520);
            $(window).resize(function () {
                $(".mailpage_congcuright_composenewmail_tb").width($(window).width() - 520);
            });
            $(".mailpage_divright").width($(window).width() - 360);
            $(window).resize(function () {
                $(".mailpage_divright").width($(window).width() - 360);
            });
            $("#div_pagecontent").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
            });
            $(".imthutvo").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
            });
            $("#div_navileft_society").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_society").fadeIn(200);
                $("#div_society2").fadeIn(200);
                $("#lbthutvo_society").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_society").animate({ "margin-left": "0px" }, 200);
                    $("#div_society").fadeOut(200);
                    $("#div_society2").fadeOut(200);
                });
            });
            $("#div_navileft_store").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_store").fadeIn(200);
                $("#div_store2").fadeIn(200);
                $("#lbthutvo_store").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_store").animate({ "margin-left": "0px" }, 200);
                    $("#div_store").fadeOut(200);
                    $("#div_store2").fadeOut(200);
                });
            });
            $("#div_navileft_dropbox").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_dropbox").fadeIn(200);
                $("#lbthutvo_dropbox").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_dropbox").animate({ "margin-left": "0px" }, 200);
                    $("#div_dropbox").fadeOut(200);
                });
            });
            $("#div_navileft_product").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_product").fadeIn(200);
                $("#div_product2").fadeIn(200);
                $("#lbthutvo_product").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_product").animate({ "margin-left": "0px" }, 200);
                    $("#div_product").fadeOut(200);
                    $("#div_product2").fadeOut(200);
                });
            });
            $("#div_navileft_video").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_video").fadeIn(200);
                $("#div_video2").fadeIn(200);
                $("#lbthutvo_video").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_video").animate({ "margin-left": "0px" }, 200);
                    $("#div_video").fadeOut(200);
                    $("#div_video2").fadeOut(200);
                });
            });
            $("#div_storage").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_mydrive").fadeIn(200);
                $("#lbthutvo_mydrive").on("click", function (event) {
                    event.preventDefault();
                    $("#div_storage").animate({ "margin-left": "0px" }, 200);
                    $("#div_mydrive").fadeOut(200);
                });
            });
            $("#div_navileft_article").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_article").fadeIn(200);
                $("#div_article2").fadeIn(200);
                $("#lbthutvo_article").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_article").animate({ "margin-left": "0px" }, 200);
                    $("#div_article").fadeOut(200);
                    $("#div_article2").fadeOut(200);
                });
            });
            $("#div_navileft_book").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_book").fadeIn(200);
                $("#div_book2").fadeIn(200);
                $("#lbthutvo_book").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_book").animate({ "margin-left": "0px" }, 200);
                    $("#div_book").fadeOut(200);
                    $("#div_book2").fadeOut(200);
                });
            });
            $("#div_navileft_project").on("click", function () {
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".divhover_leftnavi").fadeOut(200);
                $(".divhover_leftnavi2").fadeOut(200);
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(this).animate({ "margin-left": "50px" }, 200);
                $("#div_project").fadeIn(200);
                $("#div_project2").fadeIn(200);
                $("#lbthutvo_project").on("click", function (event) {
                    event.preventDefault();
                    $("#div_navileft_project").animate({ "margin-left": "0px" }, 200);
                    $("#div_project").fadeOut(200);
                    $("#div_project2").fadeOut(200);
                });
            });
            $("#div_language").on("click", function (event) {
                event.preventDefault();
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(".divhover_leftnavi").css("display", "none");
                $(".divhover_leftnavi2").css("display", "none");
                $("#divhover_language").fadeIn(200, function () {
                    $(".divhover_imexit4").on("click", function () {
                        $("#divhover_language").fadeOut(200);
                    });
                });
            });
            $("#lb_account").on("click", function (event) {
                event.preventDefault();
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(".divhover_leftnavi").css("display", "none");
                $(".divhover_leftnavi2").css("display", "none");
                $("#divhover_account").fadeIn(200, function () {
                    $(".divhover_imexit3").on("click", function () {
                        $("#divhover_account").fadeOut(200);
                    });
                });
            });
            $("#bt_noti").on("click", function (event) {
                event.preventDefault();
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(".divhover_leftnavi").css("display", "none");
                $(".divhover_leftnavi2").css("display", "none");
                $("#div_noti").fadeIn(200, function () {
                    $(".divhover_imexit").on("click", function () {
                        $("#div_noti").fadeOut(200);
                    });
                });
            });
            $("#bt_mail").on("click", function (event) {
                event.preventDefault();
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(".divhover_leftnavi").css("display", "none");
                $(".divhover_leftnavi2").css("display", "none");
                $("#div_mail").fadeIn(200, function () {
                    $(".divhover_imexit").on("click", function () {
                        $("#div_mail").fadeOut(200);
                    });
                });
            });
            $("#bt_chat").on("click", function (event) {
                event.preventDefault();
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(".divhover_leftnavi").css("display", "none");
                $(".divhover_leftnavi2").css("display", "none");
                $("#div_chat").fadeIn(200, function () {
                    $(".divhover_imexit").on("click", function () {
                        $("#div_chat").fadeOut(200);
                    });
                });
            });
            $(".datapage_divleft").height($(".datapage_divright").height());
            $("#bt_gift").on("click", function (event) {
                event.preventDefault();
                $(".div_hover1").hide();
                $(".div_hover2").hide();
                $(".leftnav_holder").animate({ "margin-left": "0px" }, 200);
                $(".divhover_leftnavi").css("display", "none");
                $(".divhover_leftnavi2").css("display", "none");
                $("#div_gift").fadeIn(200, function () {
                    $(".divhover_imexit2").on("click", function () {
                        $("#div_gift").fadeOut(200);
                    });
                });
            });
        });