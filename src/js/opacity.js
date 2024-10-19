export function setOpacity(opacityElement) {
    const width = window.innerWidth;
    const minWidth = 320;
    const maxWidth = 1200;
    const minOpacity = 0.15;
    const maxOpacity = 1;
    const opacity = minOpacity + (maxOpacity - minOpacity) * ((width - minWidth) / (maxWidth - minWidth));
    opacityElement.style.opacity = Math.min(Math.max(opacity, minOpacity), maxOpacity);
}