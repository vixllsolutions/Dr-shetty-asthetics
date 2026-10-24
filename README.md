# TRIDERMA / Dr. Shetty’s Aesthetics — static website

## Quick start

This project is plain HTML, CSS and JavaScript. No package install, build command, or external JavaScript dependency is required.

1. Extract the ZIP.
2. Upload the **contents** of `triderma_dr_shetty_site/` to the repository root (or copy these contents to your chosen GitHub Pages branch/folder).
3. Ensure `index.html`, `style.css`, `script.js` and `assets/` remain together.
4. Enable GitHub Pages from the repository settings.

For local preview, open `index.html`, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Files

- `index.html` — page structure and metadata
- `style.css` — responsive layout, motion, hover and reduced-motion rules
- `script.js` — two profile modes, gallery, lightbox, review cards and mobile navigation
- `assets/logos/` — cropped logo photographs extracted from the supplied brand images
- `assets/media/triderma/` — current TRIDERMA branding and interior images
- `assets/media/aesthetics/` — older Dr. Shetty’s Aesthetics interiors, equipment and clinic materials
- `assets/media/doctor/` — cropped doctor portrait from the supplied video consultation artwork
- `assets/reviews/source-screenshots/` — review screenshots retained as source references; the website displays text cards instead of screenshot embeds
- `assets/reference/` — original source screenshots for location, hours, branding and service information

## Source and verification notes

The public profile and history summary were drafted from the provided material and the following pages, checked on 24 October 2026. Experience, education and the listed 2013 recognition are summarized cautiously across sources because profile wording varies:

- Dr. Shetty’s Aesthetics / current clinic page: https://shraddhaashetty.wixsite.com/clinic/drshettysaestheticscomaboutus
- VSH professional profile: https://www.vshhospital.com/doctors/dr-mk-shetty-consultant-dermatologist-bangalore/
- Practo profile: https://www.practo.com/bangalore/doctor/dr-m-k-shetty-dermatologist-cosmetologist-1
- TRIDERMA Instagram shown in the provided screenshot: https://www.instagram.com/tridermabydrshetty/

The supplied clinic update explicitly says “Dr. Shetty’s Aesthetics is now called TRIDERMA.” The website therefore provides a toggle between the current TRIDERMA presentation and a legacy Dr. Shetty’s Aesthetics profile. Older photos, reviews and an older brochure mention Prestige Delta / St. Mark’s Road; the latest rebranding poster and the current profile list Basappa Complex / Lavelle Road. The legacy map link was supplied by the user and has not been independently resolved here, so the old address is labelled as historical and visitors are advised to confirm the address before travelling.

The working hours displayed for the current clinic are from the supplied listing screenshot and matching public clinic pages: Monday–Saturday, 10:00 AM–8:00 PM; Sunday closed. The legacy listing screenshot shows the same timings. Hours should be confirmed with the clinic before visiting.

The supplied number for TRIDERMA is +91 96112 69064. Older public material has listed +91 80 4911 9000 for Dr. Shetty’s Aesthetics; it is retained in the legacy profile as a historic contact and should be verified before publication. The user-provided map links are attached as requested:

- Legacy profile: https://maps.app.goo.gl/QCFQvqnxPovvFWo87?g_st=ac
- TRIDERMA: https://maps.app.goo.gl/kwuQNaNCLQUnJ3F67?g_st=ac

## Medical and testimonial note

Service cards summarize categories shown in clinic material, not a guarantee that any procedure is currently available or suitable for any individual. The website makes no promises about outcomes. Testimonial cards are shortened, faithful summaries of supplied reviews; review screenshots are retained in `assets/reviews/source-screenshots/` for reference and are not displayed on the live page. One supplied review is four stars and remains four stars.

## Before publishing

Because the source material documents a rebrand and includes older location records, confirm whether both map links should remain public and whether the legacy St. Mark’s Road address/landline should still be presented as an alternate location. Update the address and phone in `script.js` if clinic management confirms different live details.
