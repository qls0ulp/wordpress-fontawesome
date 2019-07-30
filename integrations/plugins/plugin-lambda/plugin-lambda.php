<?php

/**
 * Plugin Name:       Plugin Lambda
 * Plugin URI:        https://fontawesome.com/
 * Description:       Unregistered Client: tries to add its own v4.7.0 webfont version as an inline style.
 * Version:           0.0.1
 * Author:            Font Awesome
 * Author URI:        https://fontawesome.com/
 * License:           GPLv3
 */

defined( 'WPINC' ) || die;
define( 'LAMBDA_PLUGIN_VERSION', '0.0.1' );
define( 'LAMBDA_PLUGIN_LOG_PREFIX', 'lambda-plugin' );

$dir = dirname( __FILE__ );
$filename = trailingslashit($dir) . 'font-awesome-4.7.0.css';
$css_fd = fopen($filename, 'r');
$css_content = fread($css_fd, filesize($filename));

foreach( ['wp_enqueue_scripts', 'admin_enqueue_scripts', 'login_enqueue_scripts'] as $action ) {
	add_action( $action, function () use($css_content) {
		wp_enqueue_style( 'plugin-lambda-style', plugins_url( 'style.css', __FILE__ ) );
		// wp_add_inline_style(
		// 		'plugin-lambda-style',
		// 		'.plugin-lambda { font-size: large; }'
		// );
		wp_add_inline_style(
				'plugin-lambda-style',
				$css_content
		);
		// wp_add_inline_style(
		// 		'plugin-lambda-style',
		// 		'.plugin-lambda { color: green; }'
		// );
	}, 99 );
}

$plugin_lambda_footer_content = <<<EOT
<div class="plugin-lambda" style="border: 1px solid grey;">
	<p>plugin lambda loaded</p>
</div>
EOT;

add_action( 'wp_footer', function() use($plugin_lambda_footer_content) {
  echo $plugin_lambda_footer_content;
} );

add_action('admin_footer', function() use($plugin_lambda_footer_content) {
  echo $plugin_lambda_footer_content;
}, 10, 1);
