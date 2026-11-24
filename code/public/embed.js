/* Stub loader. The chat widget moved to chatbot0.smalltech.in; this file stays at the old address so every
   widget already installed on a customer site keeps working with no change there.

   It finds its own <script> tag, copies every data-* attribute, points data-chat-url at the new frame if it
   still names zer0.smalltech.in/embed, and loads https://chatbot0.smalltech.in/embed.js with those attributes. */
(function () {
  var NEW_LOADER = "https://chatbot0.smalltech.in/embed.js";
  var NEW_FRAME = "https://chatbot0.smalltech.in/embed/";
  var OLD_FRAME = /^https:\/\/zer0\.smalltech\.in\/embed\/?$/;

  var self = document.currentScript || document.querySelector('script[src*="/embed.js"]');
  if (!self) return;

  var loader = document.createElement("script");
  loader.src = NEW_LOADER;
  loader.defer = true;
  for (var i = 0; i < self.attributes.length; i++) {
    var attr = self.attributes[i];
    if (attr.name.indexOf("data-") === 0) loader.setAttribute(attr.name, attr.value);
  }
  var frame = loader.getAttribute("data-chat-url");
  if (!frame || OLD_FRAME.test(frame)) loader.setAttribute("data-chat-url", NEW_FRAME);

  (document.head || document.documentElement).appendChild(loader);
})();
