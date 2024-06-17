// #version 300 es
// GLSL shader that creates a background with dots.
precision mediump float;
uniform float u_time;

const float scale = 1.;
const float spacing = 40.;
const float dotSize = 2.;
const float padding = -10.;

void main() {
    vec2 uv = gl_FragCoord.xy / (scale);
    vec3 color = vec3(1, 1, 1) * 0.98;

    float offsetY = -20. * pow(sin(u_time / 1. + uv.x / 200. + -uv.y / 400.), 2.);

    if (mod(uv.x + padding, spacing) < dotSize && mod(floor(uv.y + offsetY - padding), spacing) < dotSize) {
        color = vec3(1, 1, 1) * 0.01;
    }

    gl_FragColor = vec4(color, 1);
}
