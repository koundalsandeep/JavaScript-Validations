                               $(document).on('input','.Numeric',function()
                                {
                                    this.value = this.value.replace(/[^0-9]/g,'');
                                });
                                $(document).on('input','.NumericPlusUppercase',function(e)
                                {
                                    this.value = this.value.toUpperCase();
                                    this.value = this.value.replace(/[^0-9A-Z]/g,'');
                                });
                                $(document).on('input','.UppercaseWithSPace',function(e)
                                {
                                    this.value = this.value.toUpperCase();
                                    this.value = this.value.replace(/[^A-Z\s]/g,'');
                                });
                                $(document).on('input','.NumericPlusUppercaseSPace',function(e)
                                {
                                    this.value = this.value.toUpperCase();
                                    this.value = this.value.replace(/[^0-9A-Z\s\\]/g,'');
                                });
                                
                                $(document).on('input','.NumericPlusUppercasePlusSomspecial',function(e)
                                {
                                    this.value = this.value.toUpperCase();
                                    this.value = this.value.replace(/[^0-9A-Z/]/g,'');
                                });
                                $(document).on('input','.checkEmail',function(e)
                                {
                                    this.value = this.value.toLowerCase();
                                    this.value = this.value.replace(/[^0-9a-z._@]/g,'');
                                });
                                
                                $(document).on('input','.alphanumeric',function(e)
                                {
                                    
                                    this.value = this.value.replace(/[^0-9A-Za-z]/g,'');
                                });
                                $(document).on('input','.ipv4',function(e)
                                {
                                    this.value = this.value.replace(/[^0-9.:]/g,'');
                                    
                                });
                                
                            $(document).on('input','.NumericPlusUppercaseSPace',function(e)
                             {
                                 this.value = this.value.toUpperCase();
                                 this.value = this.value.replace(/[^0-9,A-Z,' ''.\.]/g,'');
                             });
