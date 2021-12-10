
    !function () {
      if (window.JOONBOT_WIDGET_ID) {
        console.warn("Joonbot snippet included twice");
      } else {
        window.JOONBOT_WIDGET_ID = "204f71f6-970c-4cf4-bb64-c8f526e45f4e";
        var n, o;
        o = document.createElement("script");
        o.src = "https://js.joonbot.com/init.js", o.defer = !0, o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous";
        n = document.getElementsByTagName("script")[0], n.parentNode.insertBefore(o, n);
      }
    }()