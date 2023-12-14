<template>
  <div class="cursor">
    <div ref="cursorSmall" class="cursor--small"></div>
    <div ref="cursorLarge" class="cursor--large"></div>
    <div ref="cursorText" class="cursor--text">
      <div ref="cursorTextInner" class="text"></div>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import CircleType from 'circletype'

const cursorSmall = ref()
const cursorLarge = ref()
const cursorText = ref()
const cursorTextInner = ref()

onMounted(() => {
  const cursorOuter = cursorLarge.value;
  const cursorInner = cursorSmall.value;
  const cursorTextContainerEl = cursorText.value;
  const cursorTextEl = cursorTextInner.value;

  const hoverItems = document.querySelectorAll(".cursor-hover-item");
  const hoverEffectDuration = 0.3;
  let isHovered = false;
  let initialCursorHeight;

  const cursorRotationDuration = 8;

  let circleType = new CircleType(cursorTextEl);
  circleType.radius(50);

  setTimeout(() => {
    initialCursorHeight = circleType.container.style.getPropertyValue("height");
    console.log(initialCursorHeight);
  }, 1000);

  hoverItems.forEach((item) => {
    item.addEventListener("pointerenter", handlePointerEnter);
    item.addEventListener("pointerleave", handlePointerLeave);
  });

  let mouse = {
    x: -100,
    y: -100
  };

  document.body.addEventListener("pointermove", updateCursorPosition);

  function updateCursorPosition(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
  }

  function updateCursor() {
    gsap.set([cursorInner, cursorTextContainerEl], {
      x: mouse.x,
      y: mouse.y
    });

    gsap.to(cursorOuter, {
      duration: 0.15,
      x: mouse.x,
      y: mouse.y
    });

    if (!isHovered) {
      gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
        opacity: 0
      });
      gsap.set(cursorTextContainerEl, {
        rotate: 0
      });
    }

    requestAnimationFrame(updateCursor);
  }

  updateCursor();

  function handlePointerEnter(e) {
    isHovered = true;

    const target = e.currentTarget;
    updateCursorText(target);

    gsap.set([cursorTextContainerEl, cursorTextEl], {
      height: initialCursorHeight,
      width: initialCursorHeight
    });

    gsap.fromTo(
        cursorTextContainerEl,
        {
          rotate: 0
        },
        {
          duration: cursorRotationDuration,
          rotate: 360,
          ease: "none",
          repeat: -1
        }
    );

    gsap.to(cursorInner, hoverEffectDuration, {
      scale: 2
    });

    gsap.fromTo(
        cursorTextContainerEl,
        hoverEffectDuration,
        {
          scale: 1.2,
          opacity: 0
        },
        {
          delay: hoverEffectDuration * 0.75,
          scale: 1,
          opacity: 1
        }
    );
    gsap.to(cursorOuter, hoverEffectDuration, {
      scale: 1.2,
      opacity: 0
    });
  }

  function handlePointerLeave() {
    isHovered = false;
    gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
      scale: 1,
      opacity: 1
    });
  }

  function updateCursorText(textEl) {
    const cursorTextRepeatTimes = textEl.getAttribute("data-cursor-text-repeat");
    const cursorText = returnMultipleString(
        textEl.getAttribute("data-cursor-text"),
        cursorTextRepeatTimes
    );

    circleType.destroy();

    cursorTextEl.innerHTML = cursorText;
    circleType = new CircleType(cursorTextEl);
  }

  function returnMultipleString(string, count) {
    let s = "";
    for (let i = 0; i < count; i++) {
      s += ` ${string} `;
    }
    return s;
  }
})
</script>

<style>

body {
  cursor: none;
}

.cursor .cursor--small,
.cursor .cursor--large,
.cursor .cursor--text {
  position: fixed;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: var(--cursor-size);
  height: var(--cursor-size);
  mix-blend-mode: difference;
  pointer-events: none;
  user-select: none;
}
.cursor .cursor--text {
  --cursor-size: fit-content;
  font-size: 0.75rem;
  color: #fff;
  opacity: 0;
}
.cursor .cursor--text .text {
  font-family: sans-serif;
  font-weight: bold;
}
.cursor .cursor--small {
  --cursor-size: 20px;
  background: #fff;
}
.cursor .cursor--large {
  --cursor-size: 60px;
  border: 2px solid #fff;
}
</style>
