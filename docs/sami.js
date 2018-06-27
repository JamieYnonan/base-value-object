
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:BaseValueObject" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BaseValueObject.html">BaseValueObject</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:BaseValueObject_Scalar" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BaseValueObject/Scalar.html">Scalar</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:BaseValueObject_Scalar_Email" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BaseValueObject/Scalar/Email.html">Email</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BaseValueObject_Scalar_Email_Email" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BaseValueObject/Scalar/Email/Email.html">Email</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BaseValueObject_Scalar_Ip" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BaseValueObject/Scalar/Ip.html">Ip</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BaseValueObject_Scalar_Ip_IpV4" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BaseValueObject/Scalar/Ip/IpV4.html">IpV4</a>                    </div>                </li>                            <li data-name="class:BaseValueObject_Scalar_Ip_IpV6" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BaseValueObject/Scalar/Ip/IpV6.html">IpV6</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BaseValueObject_Scalar_MacAddress" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BaseValueObject/Scalar/MacAddress.html">MacAddress</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BaseValueObject_Scalar_MacAddress_MacAddress" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BaseValueObject/Scalar/MacAddress/MacAddress.html">MacAddress</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:BaseValueObject_Scalar_Password" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="BaseValueObject/Scalar/Password.html">Password</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:BaseValueObject_Scalar_Password_Password" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BaseValueObject/Scalar/Password/Password.html">Password</a>                    </div>                </li>                            <li data-name="class:BaseValueObject_Scalar_Password_SimplePassword" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="BaseValueObject/Scalar/Password/SimplePassword.html">SimplePassword</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:BaseValueObject_Scalar_BaseFloat" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="BaseValueObject/Scalar/BaseFloat.html">BaseFloat</a>                    </div>                </li>                            <li data-name="class:BaseValueObject_Scalar_BaseId" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="BaseValueObject/Scalar/BaseId.html">BaseId</a>                    </div>                </li>                            <li data-name="class:BaseValueObject_Scalar_BaseInt" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="BaseValueObject/Scalar/BaseInt.html">BaseInt</a>                    </div>                </li>                            <li data-name="class:BaseValueObject_Scalar_BaseScalar" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="BaseValueObject/Scalar/BaseScalar.html">BaseScalar</a>                    </div>                </li>                            <li data-name="class:BaseValueObject_Scalar_BaseString" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="BaseValueObject/Scalar/BaseString.html">BaseString</a>                    </div>                </li>                            <li data-name="class:BaseValueObject_Scalar_ValueObject" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="BaseValueObject/Scalar/ValueObject.html">ValueObject</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "BaseValueObject.html", "name": "BaseValueObject", "doc": "Namespace BaseValueObject"},{"type": "Namespace", "link": "BaseValueObject/Scalar.html", "name": "BaseValueObject\\Scalar", "doc": "Namespace BaseValueObject\\Scalar"},{"type": "Namespace", "link": "BaseValueObject/Scalar/Email.html", "name": "BaseValueObject\\Scalar\\Email", "doc": "Namespace BaseValueObject\\Scalar\\Email"},{"type": "Namespace", "link": "BaseValueObject/Scalar/Ip.html", "name": "BaseValueObject\\Scalar\\Ip", "doc": "Namespace BaseValueObject\\Scalar\\Ip"},{"type": "Namespace", "link": "BaseValueObject/Scalar/MacAddress.html", "name": "BaseValueObject\\Scalar\\MacAddress", "doc": "Namespace BaseValueObject\\Scalar\\MacAddress"},{"type": "Namespace", "link": "BaseValueObject/Scalar/Password.html", "name": "BaseValueObject\\Scalar\\Password", "doc": "Namespace BaseValueObject\\Scalar\\Password"},
            {"type": "Interface", "fromName": "BaseValueObject\\Scalar\\Password", "fromLink": "BaseValueObject/Scalar/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html", "name": "BaseValueObject\\Scalar\\Password\\Password", "doc": "&quot;Interface Password&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\Password", "fromLink": "BaseValueObject/Scalar/Password/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html#method_byCleanPassword", "name": "BaseValueObject\\Scalar\\Password\\Password::byCleanPassword", "doc": "&quot;Create new instance based on a clean password.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\Password", "fromLink": "BaseValueObject/Scalar/Password/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html#method_changePassword", "name": "BaseValueObject\\Scalar\\Password\\Password::changePassword", "doc": "&quot;Change the actual Password based on clean password.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\Password", "fromLink": "BaseValueObject/Scalar/Password/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html#method_verify", "name": "BaseValueObject\\Scalar\\Password\\Password::verify", "doc": "&quot;Check if the clean password is valid (the same password).&quot;"},
            
            {"type": "Interface", "fromName": "BaseValueObject\\Scalar", "fromLink": "BaseValueObject/Scalar.html", "link": "BaseValueObject/Scalar/ValueObject.html", "name": "BaseValueObject\\Scalar\\ValueObject", "doc": "&quot;Interface ValueObject&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\ValueObject", "fromLink": "BaseValueObject/Scalar/ValueObject.html", "link": "BaseValueObject/Scalar/ValueObject.html#method_equals", "name": "BaseValueObject\\Scalar\\ValueObject::equals", "doc": "&quot;Compare if a ValueObject is of the same type and identical value.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\ValueObject", "fromLink": "BaseValueObject/Scalar/ValueObject.html", "link": "BaseValueObject/Scalar/ValueObject.html#method_value", "name": "BaseValueObject\\Scalar\\ValueObject::value", "doc": "&quot;Return the scalar value.&quot;"},
            
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar", "fromLink": "BaseValueObject/Scalar.html", "link": "BaseValueObject/Scalar/BaseFloat.html", "name": "BaseValueObject\\Scalar\\BaseFloat", "doc": "&quot;Class BaseFloat&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseFloat", "fromLink": "BaseValueObject/Scalar/BaseFloat.html", "link": "BaseValueObject/Scalar/BaseFloat.html#method___construct", "name": "BaseValueObject\\Scalar\\BaseFloat::__construct", "doc": "&quot;BaseFloat constructor.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseFloat", "fromLink": "BaseValueObject/Scalar/BaseFloat.html", "link": "BaseValueObject/Scalar/BaseFloat.html#method_setValue", "name": "BaseValueObject\\Scalar\\BaseFloat::setValue", "doc": "&quot;In this method you must add all the necessary validations.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseFloat", "fromLink": "BaseValueObject/Scalar/BaseFloat.html", "link": "BaseValueObject/Scalar/BaseFloat.html#method_value", "name": "BaseValueObject\\Scalar\\BaseFloat::value", "doc": "&quot;Return the scalar value.&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar", "fromLink": "BaseValueObject/Scalar.html", "link": "BaseValueObject/Scalar/BaseId.html", "name": "BaseValueObject\\Scalar\\BaseId", "doc": "&quot;Class BaseId&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseId", "fromLink": "BaseValueObject/Scalar/BaseId.html", "link": "BaseValueObject/Scalar/BaseId.html#method___construct", "name": "BaseValueObject\\Scalar\\BaseId::__construct", "doc": "&quot;BaseId constructor.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseId", "fromLink": "BaseValueObject/Scalar/BaseId.html", "link": "BaseValueObject/Scalar/BaseId.html#method_value", "name": "BaseValueObject\\Scalar\\BaseId::value", "doc": "&quot;Return the scalar value.&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar", "fromLink": "BaseValueObject/Scalar.html", "link": "BaseValueObject/Scalar/BaseInt.html", "name": "BaseValueObject\\Scalar\\BaseInt", "doc": "&quot;Class BaseInt&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseInt", "fromLink": "BaseValueObject/Scalar/BaseInt.html", "link": "BaseValueObject/Scalar/BaseInt.html#method___construct", "name": "BaseValueObject\\Scalar\\BaseInt::__construct", "doc": "&quot;BaseInt constructor.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseInt", "fromLink": "BaseValueObject/Scalar/BaseInt.html", "link": "BaseValueObject/Scalar/BaseInt.html#method_setValue", "name": "BaseValueObject\\Scalar\\BaseInt::setValue", "doc": "&quot;In this method you must add all the necessary validations.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseInt", "fromLink": "BaseValueObject/Scalar/BaseInt.html", "link": "BaseValueObject/Scalar/BaseInt.html#method_value", "name": "BaseValueObject\\Scalar\\BaseInt::value", "doc": "&quot;Return the scalar value.&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar", "fromLink": "BaseValueObject/Scalar.html", "link": "BaseValueObject/Scalar/BaseScalar.html", "name": "BaseValueObject\\Scalar\\BaseScalar", "doc": "&quot;Class BaseScalar&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseScalar", "fromLink": "BaseValueObject/Scalar/BaseScalar.html", "link": "BaseValueObject/Scalar/BaseScalar.html#method_equals", "name": "BaseValueObject\\Scalar\\BaseScalar::equals", "doc": "&quot;Compare if a ValueObject is of the same type and identical value.&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar", "fromLink": "BaseValueObject/Scalar.html", "link": "BaseValueObject/Scalar/BaseString.html", "name": "BaseValueObject\\Scalar\\BaseString", "doc": "&quot;Class BaseString&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseString", "fromLink": "BaseValueObject/Scalar/BaseString.html", "link": "BaseValueObject/Scalar/BaseString.html#method___construct", "name": "BaseValueObject\\Scalar\\BaseString::__construct", "doc": "&quot;BaseString constructor.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseString", "fromLink": "BaseValueObject/Scalar/BaseString.html", "link": "BaseValueObject/Scalar/BaseString.html#method_setValue", "name": "BaseValueObject\\Scalar\\BaseString::setValue", "doc": "&quot;In this method you must add all the necessary validations.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\BaseString", "fromLink": "BaseValueObject/Scalar/BaseString.html", "link": "BaseValueObject/Scalar/BaseString.html#method_value", "name": "BaseValueObject\\Scalar\\BaseString::value", "doc": "&quot;Return the scalar value.&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar\\Email", "fromLink": "BaseValueObject/Scalar/Email.html", "link": "BaseValueObject/Scalar/Email/Email.html", "name": "BaseValueObject\\Scalar\\Email\\Email", "doc": "&quot;Class Email&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Email\\Email", "fromLink": "BaseValueObject/Scalar/Email/Email.html", "link": "BaseValueObject/Scalar/Email/Email.html#method_setValue", "name": "BaseValueObject\\Scalar\\Email\\Email::setValue", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar\\Ip", "fromLink": "BaseValueObject/Scalar/Ip.html", "link": "BaseValueObject/Scalar/Ip/IpV4.html", "name": "BaseValueObject\\Scalar\\Ip\\IpV4", "doc": "&quot;Class IpV4&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Ip\\IpV4", "fromLink": "BaseValueObject/Scalar/Ip/IpV4.html", "link": "BaseValueObject/Scalar/Ip/IpV4.html#method_setValue", "name": "BaseValueObject\\Scalar\\Ip\\IpV4::setValue", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar\\Ip", "fromLink": "BaseValueObject/Scalar/Ip.html", "link": "BaseValueObject/Scalar/Ip/IpV6.html", "name": "BaseValueObject\\Scalar\\Ip\\IpV6", "doc": "&quot;Class IpV6&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Ip\\IpV6", "fromLink": "BaseValueObject/Scalar/Ip/IpV6.html", "link": "BaseValueObject/Scalar/Ip/IpV6.html#method_setValue", "name": "BaseValueObject\\Scalar\\Ip\\IpV6::setValue", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar\\MacAddress", "fromLink": "BaseValueObject/Scalar/MacAddress.html", "link": "BaseValueObject/Scalar/MacAddress/MacAddress.html", "name": "BaseValueObject\\Scalar\\MacAddress\\MacAddress", "doc": "&quot;Class MacAddress&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\MacAddress\\MacAddress", "fromLink": "BaseValueObject/Scalar/MacAddress/MacAddress.html", "link": "BaseValueObject/Scalar/MacAddress/MacAddress.html#method_setValue", "name": "BaseValueObject\\Scalar\\MacAddress\\MacAddress::setValue", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar\\Password", "fromLink": "BaseValueObject/Scalar/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html", "name": "BaseValueObject\\Scalar\\Password\\Password", "doc": "&quot;Interface Password&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\Password", "fromLink": "BaseValueObject/Scalar/Password/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html#method_byCleanPassword", "name": "BaseValueObject\\Scalar\\Password\\Password::byCleanPassword", "doc": "&quot;Create new instance based on a clean password.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\Password", "fromLink": "BaseValueObject/Scalar/Password/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html#method_changePassword", "name": "BaseValueObject\\Scalar\\Password\\Password::changePassword", "doc": "&quot;Change the actual Password based on clean password.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\Password", "fromLink": "BaseValueObject/Scalar/Password/Password.html", "link": "BaseValueObject/Scalar/Password/Password.html#method_verify", "name": "BaseValueObject\\Scalar\\Password\\Password::verify", "doc": "&quot;Check if the clean password is valid (the same password).&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar\\Password", "fromLink": "BaseValueObject/Scalar/Password.html", "link": "BaseValueObject/Scalar/Password/SimplePassword.html", "name": "BaseValueObject\\Scalar\\Password\\SimplePassword", "doc": "&quot;Class SimplePassword&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\SimplePassword", "fromLink": "BaseValueObject/Scalar/Password/SimplePassword.html", "link": "BaseValueObject/Scalar/Password/SimplePassword.html#method_byCleanPassword", "name": "BaseValueObject\\Scalar\\Password\\SimplePassword::byCleanPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\SimplePassword", "fromLink": "BaseValueObject/Scalar/Password/SimplePassword.html", "link": "BaseValueObject/Scalar/Password/SimplePassword.html#method___construct", "name": "BaseValueObject\\Scalar\\Password\\SimplePassword::__construct", "doc": "&quot;SimplePassword constructor.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\SimplePassword", "fromLink": "BaseValueObject/Scalar/Password/SimplePassword.html", "link": "BaseValueObject/Scalar/Password/SimplePassword.html#method_changePassword", "name": "BaseValueObject\\Scalar\\Password\\SimplePassword::changePassword", "doc": "&quot;Change the actual Password based on clean password.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\SimplePassword", "fromLink": "BaseValueObject/Scalar/Password/SimplePassword.html", "link": "BaseValueObject/Scalar/Password/SimplePassword.html#method_verify", "name": "BaseValueObject\\Scalar\\Password\\SimplePassword::verify", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\SimplePassword", "fromLink": "BaseValueObject/Scalar/Password/SimplePassword.html", "link": "BaseValueObject/Scalar/Password/SimplePassword.html#method_value", "name": "BaseValueObject\\Scalar\\Password\\SimplePassword::value", "doc": "&quot;Return the scalar value.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\Password\\SimplePassword", "fromLink": "BaseValueObject/Scalar/Password/SimplePassword.html", "link": "BaseValueObject/Scalar/Password/SimplePassword.html#method_equals", "name": "BaseValueObject\\Scalar\\Password\\SimplePassword::equals", "doc": "&quot;This method is not supported&quot;"},
            
            {"type": "Class", "fromName": "BaseValueObject\\Scalar", "fromLink": "BaseValueObject/Scalar.html", "link": "BaseValueObject/Scalar/ValueObject.html", "name": "BaseValueObject\\Scalar\\ValueObject", "doc": "&quot;Interface ValueObject&quot;"},
                                                        {"type": "Method", "fromName": "BaseValueObject\\Scalar\\ValueObject", "fromLink": "BaseValueObject/Scalar/ValueObject.html", "link": "BaseValueObject/Scalar/ValueObject.html#method_equals", "name": "BaseValueObject\\Scalar\\ValueObject::equals", "doc": "&quot;Compare if a ValueObject is of the same type and identical value.&quot;"},
                    {"type": "Method", "fromName": "BaseValueObject\\Scalar\\ValueObject", "fromLink": "BaseValueObject/Scalar/ValueObject.html", "link": "BaseValueObject/Scalar/ValueObject.html#method_value", "name": "BaseValueObject\\Scalar\\ValueObject::value", "doc": "&quot;Return the scalar value.&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


