var posts=["/cplusplus/auto-type/","/cplusplus/class_template_argument_deduction/","/everyday/codeium/","/cplusplus/if-switch/","/cplusplus/inline/","/cplusplus/lambda/","/cplusplus/structured_binding/","/everyday/wsl-encoding-issue/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };