<?php
/**
 * Plugin Name: Toggle ACF flexible layouts.
 * Description: Toggle ACF flexible layouts for better usability when managing flexible layouts.
 * Version: 1.0.1
 * Author: Timi-Artturi Mäkelä
 * Author URI: https://github.com/Liblastic
 * License: GPL-3.0
 * Text Domain: acf-toggle-flexible-layouts
 * Domain Path: /languages
 */

namespace Geniem;

/**
 * Class AcfToggleFlexibleLayouts
 */
class AcfToggleFlexibleLayouts {

    /**
     * Plugin constructor
     */
    public function __construct() {
        add_action( 'admin_enqueue_scripts', [ $this, 'acf_toggle_flexible_layouts_scripts_and_styles' ] );
        add_action( 'plugins_loaded', [ $this, 'load_plugin_textdomain' ] );
    }

    /**
     * Scripts and styles.
     */
    public function acf_toggle_flexible_layouts_scripts_and_styles() {

        // Plugin version.
        $plugin_data    = get_plugin_data( __FILE__ );
        $plugin_version = $plugin_data['Version'];

        // Register script.
        wp_register_script( 'acf_close_flexible',  plugin_dir_url( __FILE__ ) . '/assets/dist/admin.js', '', $plugin_version );

        // Localize the script with new data
        $localization_data = [
            'data'             => $this->button_data(),
            'localized_string' => $this->localized_strings(),
        ];

        // Add strings to script.
        wp_localize_script( 'acf_close_flexible', 'localization_data', $localization_data );

        // Enqueued script with localized data.
        wp_enqueue_script( 'acf_close_flexible' );
    }

    /**
     * Button data.
     *
     * @return void
     */
    public function button_data() {

        $data = [
            'wrapper_classes'       => 'acf-field',
            'toggle_button_classes' => 'close-flexible',
            'arrow_up'              => '&#9660;',
            'arrow_down'            => '&#9650;',
        ];

        // Filter localized strings.
        apply_filters( 'geniem/toggle_flexible_layouts/button_data', $data );

        return $data;
    }

    /**
     * Define plugin localized strings passed to the javascript.
     *
     * @return array An array of localized strings.
     */
    public function localized_strings() {

        // Localized strings.
        $localized_strings = [
            'show_text' => __( 'Show all layouts', 'acf-toggle-flexible-layouts' ),
            'hide_text' => __( 'Hide all layouts', 'acf-toggle-flexible-layouts' ),
        ];

        // Filter localized strings.
        apply_filters( 'geniem/toggle_flexible_layouts/localized_strings', $localized_strings );

        return $localized_strings;
    }

    /**
     * Load Plugin Text Domain
     * note: no full path [plugin_folder]/languages
     */
    public function load_plugin_textdomain() {
        load_plugin_textdomain( 'acf-toggle-flexible-layouts', false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
    }
}

new AcfToggleFlexibleLayouts();
