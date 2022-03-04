let iframe = document.getElementById( 'api-frame' );
let uid = '2ec4e968688446878b23383769eca79f';
let client = null;
function loadmodel(){
    document.addEventListener('load', () => console.log( 'viewerready' ))
    // By default, the latest version of the viewer API will be used.
    let client = new Sketchfab(iframe);
    // Alternatively, you can request a specific version.
    // var client = new Sketchfab( '1.0.0', iframe );
    client.init( uid, {
        success: function onSuccess( api ){
            console.log( 'Success' );
            api.load();
            api.start();
            api.addEventListener( 'viewerready', function() {
                console.log( 'Viewer is ready' );
                // once the viewer is ready, show the iframe
                let $apiFrame = document.getElementById( 'api-frame' );
                $apiFrame.classList.remove( 'hidden' ); // Remove hidden class
            } );
        },
        error: function onError( callback ){
            console.log( this.error );
        }
    })
}
loadmodel()