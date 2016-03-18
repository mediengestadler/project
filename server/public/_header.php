<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <title><?php echo TITLE; ?></title>
    <meta name="apple-mobile-web-app-title" content="<?php echo TITLE_SHORTENED; ?>">
    <meta name="description" content="<?php echo DESCRIPTION; ?>">

    <meta property="og:title" content="<?php echo TITLE; ?>">
    <meta property="og:description" content="<?php echo DESCRIPTION; ?>">
    <meta property="og:url" content="<?php echo URL; ?>">
    <meta property="og:image" content="<?php echo URL . PATH; ?>media/poster.png">
    <meta property="og:site_name" content="<?php echo TITLE; ?>">

    <meta name="twitter:card" content="" />
    <meta name="twitter:title" content="<?php echo TITLE; ?>">
    <meta name="twitter:description" content="<?php echo DESCRIPTION; ?>">
    <meta name="twitter:image" content="<?php echo URL . PATH; ?>media/poster.png">

    <link rel="shortcut icon" href="<?php echo URL . PATH; ?>media/favicon.ico">
    <link rel="apple-touch-icon" href="<?php echo URL . PATH; ?>media/touch-icon.png">

    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,700,800|Shadows+Into+Light+Two" rel="stylesheet" type="text/css">
    <link rel="stylesheet" media="all" href="<?php echo URL . PATH; ?>styles/app.css">

    <?php /* <link rel="alternate" hreflang="es" href="http://es.example.com/" />*/ ?>

    <script>
        window.options = {
            url: '<?php echo URL; ?>',
            path: '<?php echo PATH; ?>'
        };
    </script>
    <script src="<?php echo URL . PATH; ?>scripts/main.js" async></script>
</head>