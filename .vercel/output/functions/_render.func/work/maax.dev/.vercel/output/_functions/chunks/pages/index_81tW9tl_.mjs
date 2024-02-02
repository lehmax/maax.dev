/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, k as renderComponent, m as maybeRenderHead } from '../astro_RqdkYm3A.mjs';
import 'cssesc';
import { jsx } from 'react/jsx-runtime';

const Link = ({ href, children }) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className: "font-black bg-green-500 text-green-900 border-black inline-flex h-16 text-xl items-center justify-center overflow-hidden rounded border-2 border-neutral-900 px-6 [box-shadow:6px_6px_rgb(23_23_23)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]",
      children
    }
  );
};

const $$Astro$1 = createAstro("https://maax.dev");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, desc } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(desc, "content")}>${renderHead()}</head> <body class="bg-yellow-50 text-zinc-950"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/max/work/maax.dev/src/layouts/layout.astro", void 0);

const $$Astro = createAstro("https://maax.dev");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Maxime Leherquer - Frontend Developer", "desc": "Hi,I'm Maxime Leherquer, a Frontend Developer based in Caen, France." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-48 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3"> <h1 class="font-bold font-title text-6xl">maax.dev</h1> <blockquote class="font-bold font-title text-4xl">
Hi 🤙 ! I'm <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-yellow-500 relative inline-block"> <span class="relative text-black">Max</span> </span> a Frontend Developer based in Caen, France.
</blockquote> ${renderComponent($$result2, "Link", Link, { "href": "https://www.linkedin.com/in/maxime-leherquer/" }, { "default": ($$result3) => renderTemplate`Click me` })} </main> ` })}`;
}, "/Users/max/work/maax.dev/src/pages/index.astro", void 0);

const $$file = "/Users/max/work/maax.dev/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
