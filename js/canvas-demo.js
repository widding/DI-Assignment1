document.addEventListener('DOMContentLoaded', () =>
{
    let contexts = {
        like: {
            canvas: document.getElementById('like-dropzone'),
            ctx: document.getElementById('like-dropzone').getContext('2d')
        },
        dislike: {
            canvas: document.getElementById('dislike-dropzone'),
            ctx: document.getElementById('dislike-dropzone').getContext('2d')
        },
        superlike: {
            canvas: document.getElementById('superLike-dropzone'),
            ctx: document.getElementById('superLike-dropzone').getContext('2d')
        },
        superdislike: {
            canvas: document.getElementById('superDislike-dropzone'),
            ctx: document.getElementById('superDislike-dropzone').getContext('2d')
        },
    };

    for (const [, obj] of Object.entries(contexts))
    {
        const canvas = obj.canvas;
        const ctx = obj.ctx;

        // gradient is created in css, but replace with fancy effects here

        /*
        // Create gradient
        let grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
        grd.addColorStop(0, "red");
        grd.addColorStop(1, "white");

        // Fill with gradient
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
         */
    }
});