const $ = window.jQuery;

/**
 * ACF toggle flexible layouts.
 */
class AcfToggleFlexibleLayouts {

    /**
     * Plugin JS constructor.
     */
    constructor() {

        this.$acfWrapper              = $( '#acf-article' );
        this.$flexibleContentWrappers = $( '.acf-flexible-content' );
        this.activeFlexible           = '';

        // Do not run any code if there wasn't any flexible fields.
        if ( this.$flexibleContentWrappers.length ) {

            this.init();
            this.checkAllFlexibleLayouts( this.$flexibleContentWrappers );
            this.events();
        }
    }

    /**
     * Init
     */
    init() {

        this.wrapperClasses = localization_data.data.wrapper_classes;
        this.arrowUp        = localization_data.data.arrow_up;
        this.arrowDown      = localization_data.data.arrow_down;
        this.buttonClasses  = localization_data.data.toggle_button_classes;
        this.showText       = localization_data.localized_string.show_text + ' ' + this.arrowUp;
        this.hideText       = localization_data.localized_string.hide_text + ' ' + this.arrowDown;

        /**
         * Create a dom element
         * 
         * <div class="[this.wrapperClasses]">
         *      <button class="button closed js-acf-toggle-flexible-button [this.buttonClasses]">
         *      </button>
         * </div>
         */
        const toggleButtonWrapper     = $( '<div></div>' ).addClass( this.wrapperClasses );
        const toggleButton            = $( '<button></button>' ).addClass( 'button closed js-acf-toggle-flexible-button ' + this.buttonClasses ).html( this.showText );
        const toggleButtonWithWrapper = toggleButtonWrapper.append( toggleButton );

        this.$flexibleContentWrappers.prepend( toggleButtonWithWrapper );
    }

    /**
     * Plugin events and hooks.
     */
    events() {

        $( '.js-acf-toggle-flexible-button' ).on( 'click', e => this.toggleFlexibleLayouts( e ) );

        // ACF toggle layouts actions.
        acf.add_action( 'show_field', $el => this.checkClosestFlexibleLayoutsStatuses( $el ) );
        acf.add_action( 'hide_field', $el => this.checkClosestFlexibleLayoutsStatuses( $el ) );

        // When flexible layout is added.
        acf.add_action( 'append', $el => this.acfAppendCallback( $el ) );

    }

    /**
     * Check all flexible content wrappers statuses.
     * 
     * @param {*} $flexibleContentWrapper Flexible content wrapper.
     */
    checkAllFlexibleLayouts( $flexibleContentWrappers ) {

        $flexibleContentWrappers.each( ( index, flexibleContentWrapper ) => {
            this.checkFlexibleLayoutsStatuses( $( flexibleContentWrapper ) );
        });
    }

    /**
     * Callback function for appending ACF flexible layouts.
     * 
     * @param {*} $el ACF field jQuery object.
     */
    acfAppendCallback( $el ) {

        // If appended element is flexible layout.
        if ( $el.hasClass( 'layout' ) ) {
            const $flexibleContentWrapper = $el.closest( '.acf-flexible-content' );
            this.checkFlexibleLayoutsStatuses( $flexibleContentWrapper );
        }
    }

    /**
     * Check flexible layouts statuses and
     * update toggle statuses.
     * 
     * @param {*} $flexibleContentWrapper Flexible content wrapper.
     */
    checkFlexibleLayoutsStatuses( $flexibleContentWrapper ) {

        if ( $flexibleContentWrapper ) {
            const $layoutWrappers = $flexibleContentWrapper.children( '.values' ).children( '.layout' );
            let anyOpen           = false;

            // There could be empty layout without layouts.
            if ( $layoutWrappers.length ) {

                // Check if any of layouts are open after page load.
                $layoutWrappers.each( ( index, layoutWrapper ) => {

                    if ( ! $( layoutWrapper ).hasClass( '-collapsed' ) ) {
                        anyOpen = true;
                    }
                });

                // Update buttons.
                const $toggleButton = $flexibleContentWrapper.find( '.js-acf-toggle-flexible-button' );

                // If none of the layouts are open.
                if ( anyOpen === false ) {
                    $toggleButton.addClass( 'closed' );
                    $toggleButton.html( this.showText );
                } else {
                    $toggleButton.removeClass( 'closed' );
                    $toggleButton.html( this.hideText );
                }
            }
        }

        return false;
    }

    /**
     * Check closest flexible layout status.
     * 
     * @param {*} $el ACF field jQuery object.
     */
    checkClosestFlexibleLayoutsStatuses( $el ) {

        const $parentLayout = $el.parent( '.acf-fields' ).parent( '.layout' );

        // If appended element is flexible layout.
        if ( $parentLayout.length ) {
            const $flexibleContentWrapper = $parentLayout.closest( '.acf-flexible-content' );

            this.checkFlexibleLayoutsStatuses( $flexibleContentWrapper );

        }
    }

    /**
     * Toggle flexible layouts.
     * 
     * @param {*} e Click event.
     */
    toggleFlexibleLayouts( e ) {

        this.stop( e );

        const $target = $( e.target );

        // Hide all layouts.
        if ( ! $target.hasClass( 'closed' ) ) {

            $target.closest( '.acf-flexible-content' );

            // Update the button.
            $target.addClass( 'closed' );
            $target.html( this.showText );

            // Loop through the closest flexible layouts and close if open.
            $target.closest( '.acf-flexible-content' ).children( '.values' ).children( '.layout' ).addClass( '-collapsed' );

        }
        // Show all layouts.
        else {

            // Update the button.
            $target.removeClass( 'closed' );
            $target.html( this.hideText );

            // Loop through the closest flexible layouts and close if open.
            $target.closest( '.acf-flexible-content' ).children( '.values' ).children( '.layout' ).removeClass( '-collapsed' );
        }
    }

    /**
     * Offers safe way to stop a JS event.
     *
     * Example usage:
     * this.stop(e);
     *
     * @param e Event object.
     */
    stop( e ) {
        e.preventDefault ? e.preventDefault() : ( e.returnValue = false );
    }
}

$( document ).ready( function() {
    new AcfToggleFlexibleLayouts();
});
