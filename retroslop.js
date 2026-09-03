// ==UserScript==
// @name         V3rmillion Classic Theme - Screenshot Match
// @namespace    http://tampermonkey.net/
// @version      5.3.1
// @description  V3rmillion classic screenshot-matched theme
// @author       kaku
// @match        *://v3rm.net/*
// @match        *://www.v3rm.net/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
    'use strict';

    GM_addStyle(`
        :root {
            --bg:          #111111;
            --bg-dark:     #0d0d0d;

            --card:        #1d1d1d;
            --card2:       #202020;
            --card3:       #242424;
            --card4:       #292929;

            --nav:         #202020;
            --nav-hover:   #292929;

            --border:      #303030;
            --border-dark: #181818;

            --red:         #d90000;
            --red-hi:      #ed0000;
            --red-dark:    #a90000;

            --grey:        #393939;
            --grey2:       #424242;

            --text:        #dddddd;
            --dim:         #999999;
            --white:       #ffffff;

            --like-green:  #35c759;
        }

        /* =========================================================
           GLOBAL
        ========================================================= */

        html {
            background: var(--bg) !important;
            min-height: 100% !important;
        }

        body {
            background:
                radial-gradient(
                    ellipse at top,
                    rgba(255,255,255,0.025) 0%,
                    rgba(255,255,255,0) 55%
                ),
                repeating-linear-gradient(
                    0deg,
                    rgba(255,255,255,0.008) 0px,
                    rgba(255,255,255,0.008) 1px,
                    transparent 1px,
                    transparent 3px
                ),
                #111111 !important;

            color: var(--text) !important;
            font-family: "Segoe UI", Arial, Helvetica, sans-serif !important;
            font-size: 14px !important;
            min-height: 100vh !important;
        }

        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        a {
            color: var(--text) !important;
            text-decoration: none !important;
        }

        a:hover {
            color: var(--white) !important;
            text-decoration: none !important;
        }

        img {
            max-width: 100%;
        }

        /* =========================================================
           PAGE WIDTH / CENTERING
        ========================================================= */

        .p-header-inner,
        .p-nav-inner,
        .p-body-inner,
        .p-footer-inner {
            width: 100% !important;
            max-width: 1600px !important;
            margin-left: auto !important;
            margin-right: auto !important;
        }

        .p-body-inner {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }

        /* =========================================================
           HEADER
        ========================================================= */

        .p-header,
        .p-header-inner,
        #header,
        .p-header-pageContent {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
        }

        .p-header {
            min-height: 210px !important;
        }

        .p-header-inner {
            min-height: 210px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding-top: 18px !important;
            padding-bottom: 24px !important;
        }

        .p-header-logo {
            margin: 0 auto !important;
            text-align: center !important;
        }

        .p-header-logo a {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
        }

        .p-header-logo img {
            filter: none !important;
            max-height: 125px !important;
            width: auto !important;
        }

        .p-header-logo a::before {
            display: none !important;
            content: none !important;
        }

        /* =========================================================
           TOP NAVIGATION
        ========================================================= */

        .p-nav {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            margin: 0 auto !important;
        }

        .p-nav-inner {
            min-height: 58px !important;

            background:
                linear-gradient(
                    to bottom,
                    #242424 0%,
                    #202020 100%
                ) !important;

            border: none !important;
            border-bottom: 4px solid var(--red) !important;

            padding: 0 !important;
        }

        .p-nav-list {
            background: transparent !important;
            min-height: 54px !important;
        }

        .p-navEl {
            min-height: 54px !important;
        }

        .p-navEl .p-navEl-link,
        .p-nav-list > li > a,
        .p-nav-list > li > span {
            min-height: 54px !important;

            display: flex !important;
            align-items: center !important;

            padding: 0 14px !important;

            background: transparent !important;
            color: #eeeeee !important;

            border: none !important;
            border-radius: 0 !important;

            font-size: 16px !important;
            font-weight: 400 !important;

            line-height: 1.1 !important;
        }

        .p-navEl .p-navEl-link:hover,
        .p-nav-list > li > a:hover {
            background: rgba(255,255,255,0.045) !important;
            color: #ffffff !important;
        }

        .p-navEl.is-selected .p-navEl-link,
        .p-navEl--selected .p-navEl-link,
        .p-nav-list > li.is-selected > a {
            background: var(--red) !important;
            color: #ffffff !important;
            font-weight: 500 !important;
        }

        .p-navEl.is-selected .p-navEl-link:hover,
        .p-navEl--selected .p-navEl-link:hover {
            background: var(--red-hi) !important;
        }

        .p-navEl-splitTrigger {
            background: transparent !important;
            color: #888888 !important;
            border: none !important;
        }

        .p-navEl-splitTrigger:hover {
            background: rgba(255,255,255,0.05) !important;
            color: #ffffff !important;
        }

        /* =========================================================
           NAV ICONS / USER AREA
        ========================================================= */

        .p-navgroup-link,
        .p-navgroup-link--menuTrigger {
            background: transparent !important;
            color: #cccccc !important;
            border: none !important;
        }

        .p-navgroup-link:hover,
        .p-navgroup-link--menuTrigger:hover {
            background: rgba(255,255,255,0.05) !important;
            color: #ffffff !important;
        }

        .p-navgroup-link .avatar,
        .p-navgroup-link .avatar img {
            border-radius: 0 !important;
        }

        .p-navgroup-link--user {
            background: transparent !important;
        }

        /* =========================================================
           SECONDARY NAV
        ========================================================= */

        .p-nav--secondary {
            display: none !important;
        }

        /* =========================================================
           SECTION LINKS
           Completely removed
        ========================================================= */

        .p-sectionLinks,
        .p-sectionLinks-inner,
        .p-sectionLinks-list,
        .p-sectionLinks-link {
            display: none !important;
        }

        /* =========================================================
           DROPDOWN MENUS
        ========================================================= */

        .menu {
            background: #242424 !important;
            border: 1px solid #383838 !important;
            border-top: 2px solid var(--red) !important;
            border-radius: 0 !important;
            box-shadow: 0 8px 25px rgba(0,0,0,0.85) !important;
        }

        .menu-content {
            background: #242424 !important;
        }

        .menu-row > a,
        .menu-linkRow {
            color: #cccccc !important;
            background: transparent !important;
        }

        .menu-row > a:hover,
        .menu-linkRow:hover {
            background: #303030 !important;
            color: #ffffff !important;
        }

        /* =========================================================
           PAGE BODY
        ========================================================= */

        .p-pageWrapper,
        .p-body,
        .p-body-main,
        .p-body-inner,
        .p-body-pageContent,
        .p-body-content,
        .p-sidebarLayout {
            background: transparent !important;
        }

        .p-body {
            padding-top: 20px !important;
        }

        /* =========================================================
           PAGE TITLE
        ========================================================= */

        .p-body-header {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            padding: 22px 0 28px !important;
        }

        .p-title-value {
            color: #eeeeee !important;
            font-size: 26px !important;
            font-weight: 600 !important;
            letter-spacing: 0 !important;
        }

        .p-description {
            color: #888888 !important;
        }

        /* =========================================================
           ACTION BUTTONS
        ========================================================= */

        .p-body-header .buttonGroup {
            gap: 5px !important;
        }

        .button,
        a.button,
        .button--default {
            background: #242424 !important;
            border: 1px solid #555555 !important;
            border-radius: 2px !important;
            color: #eeeeee !important;
            box-shadow: none !important;
            text-shadow: none !important;
        }

        .button:hover,
        a.button:hover {
            background: #303030 !important;
            border-color: #777777 !important;
            color: #ffffff !important;
        }

        .button--primary,
        .button--cta {
            background: var(--red) !important;
            border: 1px solid #8f0000 !important;
            border-radius: 2px !important;
            color: #ffffff !important;
            font-weight: 600 !important;
        }

        .button--primary:hover,
        .button--cta:hover {
            background: var(--red-hi) !important;
        }

        /* =========================================================
           BLOCKS / MAIN CONTENT CONTAINERS
        ========================================================= */

        .block {
            background: #1d1d1d !important;
            border: 1px solid #303030 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            margin-bottom: 10px !important;
        }

        .block-container {
            background: transparent !important;
        }

        /* =========================================================
           RED BLOCK HEADERS
           Socialising / Exploiting / Marketplace / etc.
        ========================================================= */

        .block-header {
            background:
                linear-gradient(
                    to bottom,
                    #df1515 0%,
                    #d50000 100%
                ) !important;

            color: #ffffff !important;

            border: none !important;
            border-bottom: 1px solid #a90000 !important;
            border-radius: 0 !important;

            padding: 13px 18px !important;

            box-shadow: none !important;
        }

        .block-header h2,
        .block-header h3,
        .block-header a,
        .block-header span {
            color: #ffffff !important;
            font-size: 16px !important;
            font-weight: 600 !important;
        }

        .block-header a:hover {
            color: #ffffff !important;
        }

        /* =========================================================
           RED CATEGORY HEADERS
        ========================================================= */

        .block-minorHeader,
        h3.block-minorHeader,
        .node-categoryStrip,
        .block--forum .block-minorHeader,
        .block-container > .block-minorHeader,
        [class*="block-minorHeader"] {

            background:
                linear-gradient(
                    to bottom,
                    #df1515 0%,
                    #d50000 100%
                ) !important;

            color: #ffffff !important;

            font-size: 18px !important;
            font-weight: 700 !important;

            padding: 17px 18px !important;

            border: none !important;
            border-radius: 0 !important;

            text-transform: none !important;
            letter-spacing: 0 !important;

            box-shadow: none !important;
        }

        .block-minorHeader *,
        .block-minorHeader a,
        .block-minorHeader .block-minorHeader-title,
        h3.block-minorHeader a {
            color: #ffffff !important;
        }

        .block-minorHeader .iconic,
        .block-minorHeader button,
        .block-minorHeader .block-minorHeader-controls {
            color: rgba(255,255,255,0.9) !important;
        }

        /* =========================================================
           FORUM / NODE ROWS
        ========================================================= */

        .node,
        .node--forum {
            background: #202020 !important;
            border-bottom: 1px solid #303030 !important;
            padding: 17px 18px !important;
            min-height: 75px !important;
        }

        .node:last-child {
            border-bottom: none !important;
        }

        .node:hover {
            background: #252525 !important;
        }

        .node-icon {
            color: var(--red) !important;
        }

        .node-icon .iconic {
            color: var(--red) !important;
        }

        .node--link .node-icon .iconic {
            color: #4a9af5 !important;
        }

        .node-title a {
            color: #eeeeee !important;
            font-size: 18px !important;
            font-weight: 400 !important;
        }

        .node-title a:hover {
            color: #ffffff !important;
        }

        .node-description {
            color: #888888 !important;
            font-size: 12px !important;
        }

        .node-subNodeFlatList a {
            color: #888888 !important;
            font-size: 11px !important;
        }

        .node-subNodeFlatList a:hover {
            color: #dddddd !important;
        }

        .node-stats dt {
            color: #888888 !important;
            font-size: 12px !important;
        }

        .node-stats dd {
            color: #dddddd !important;
            font-size: 14px !important;
            font-weight: 400 !important;
            margin: 0 !important;
        }

        .node-lastPost,
        .node-extra {
            color: #888888 !important;
            font-size: 12px !important;
        }

        .node-lastPost a,
        .node-extra a {
            color: #cccccc !important;
        }

        /* =========================================================
           THREAD LIST
        ========================================================= */

        .structItem--thread {
            background: #202020 !important;
            border-bottom: 1px solid #303030 !important;
            padding: 11px 14px !important;
        }

        .structItem--thread:nth-child(even) {
            background: #1d1d1d !important;
        }

        .structItem--thread:hover {
            background: #272727 !important;
        }

        .structItem-title > a {
            color: #dddddd !important;
            font-size: 14px !important;
        }

        .structItem-title > a:hover {
            color: #ffffff !important;
        }

        .structItem-minor,
        .structItem-cell--meta,
        .pairs dd,
        .pairs dt {
            color: #888888 !important;
            font-size: 11px !important;
        }

        /* =========================================================
           POSTS
        ========================================================= */

        .message,
        .message--post {
            background: #1d1d1d !important;
            border: 1px solid #303030 !important;
            border-radius: 0 !important;
            margin-bottom: 8px !important;
            box-shadow: none !important;
        }

        .message-inner,
        .message-body,
        .message-userContent,
        .message-content {
            background: #1d1d1d !important;
        }

        .message-header {
            background: #242424 !important;
            border-bottom: 1px solid #303030 !important;
            padding: 9px 13px !important;
        }

        .message-cell--user,
        .message-aside {
            background: #242424 !important;
            border-right: 1px solid #303030 !important;
        }

        .message-name a {
            color: #eeeeee !important;
            font-weight: 700 !important;
        }

        .message-name a:hover {
            color: #ffffff !important;
        }

        .message-body {
            padding: 14px !important;
            color: #cccccc !important;
            line-height: 1.6 !important;
        }

        time.u-dt,
        .message-attribution {
            color: #888888 !important;
            font-size: 11px !important;
        }

        /* =========================================================
           CODE BLOCKS
        ========================================================= */

        .bbCodeBlock {
            background: #242424 !important;
            border: 1px solid #363636 !important;
            border-left: 3px solid var(--red) !important;
            border-radius: 0 !important;
        }

        .bbCodeBlock-title {
            background: #202020 !important;
            color: #999999 !important;
        }

        .bbCodeBlock-content {
            color: #cccccc !important;
        }

        /* =========================================================
           REACTIONS
        ========================================================= */

        .reactionsBar,
        .reactionsBar.js-reactionsList,
        .reactionsBar.js-reactionsList.is-active,
        .js-reactionsList.is-active {
            background: #393939 !important;
            color: #dddddd !important;

            border: 1px solid #303030 !important;
            border-radius: 2px !important;

            box-shadow: none !important;
        }

        .reactionsBar a,
        .reactionsBar button,
        .reactionsBar span,
        .reactionsBar .reaction,
        .reactionsBar .reactionSummary {
            color: #dddddd !important;
        }

        .reactionsBar a:hover,
        .reactionsBar button:hover {
            color: #ffffff !important;
            background: #444444 !important;
        }

        .reactionSummary {
            background: transparent !important;
        }

        .reactionSummaryItem {
            background: transparent !important;
            color: #dddddd !important;
        }

        /* =========================================================
           LIKE REACTION
           Hide the JoyPixels image completely.
           JS inserts a real green thumbs-up element.
        ========================================================= */

        img.reaction-image--emoji.js-reaction[alt="Like"],
        img.reaction-image--emoji.js-reaction[title="Like"] {
            display: none !important;
        }

        .v3rm-green-like {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;

            width: 19px !important;
            height: 19px !important;

            margin-right: 5px !important;

            background: transparent !important;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;

            vertical-align: middle !important;
            flex-shrink: 0 !important;
        }

        .v3rm-green-like svg {
            display: block !important;

            width: 18px !important;
            height: 18px !important;

            fill: var(--like-green) !important;
            stroke: none !important;
        }

        /* =========================================================
           SIDEBAR
        ========================================================= */

        .p-sidebar .block,
        .sidebar .block {
            background: #1d1d1d !important;
            border: 1px solid #303030 !important;
            border-radius: 0 !important;
        }

        .p-sidebar .block-header,
        .sidebar .block-header {
            background:
                linear-gradient(
                    to bottom,
                    #df1515 0%,
                    #d50000 100%
                ) !important;

            border-bottom: 1px solid #a90000 !important;
            padding: 14px 16px !important;
        }

        .p-sidebar .block-header h2,
        .p-sidebar .block-header h3,
        .p-sidebar .block-header a,
        .sidebar .block-header h2,
        .sidebar .block-header h3,
        .sidebar .block-header a {
            color: #ffffff !important;
            font-size: 18px !important;
            font-weight: 600 !important;
        }

        .contentRow {
            background: #202020 !important;
            border-bottom: 1px solid #303030 !important;
            padding: 9px 12px !important;
        }

        .contentRow:hover {
            background: #252525 !important;
        }

        .contentRow-title a {
            color: #dddddd !important;
            font-size: 13px !important;
        }

        .contentRow-title a:hover {
            color: #ffffff !important;
        }

        .contentRow-minor,
        .contentRow-snippet {
            color: #888888 !important;
            font-size: 11px !important;
        }

        .avatarStatus {
            background: #2ecc71 !important;
            border: 2px solid #1d1d1d !important;
        }

        .userTitle,
        .userBanner {
            color: #888888 !important;
            font-size: 11px !important;
        }

        /* =========================================================
           AVATARS
        ========================================================= */

        .avatar {
            border-radius: 2px !important;
        }

        .avatar img {
            border-radius: 2px !important;
        }

        /* =========================================================
           INPUTS
        ========================================================= */

        input[type=text],
        input[type=search],
        input[type=email],
        input[type=password],
        textarea,
        select {
            background: #242424 !important;
            border: 1px solid #3a3a3a !important;
            color: #dddddd !important;
            border-radius: 2px !important;
            box-shadow: none !important;
            padding: 7px 10px !important;
        }

        input:focus,
        textarea:focus,
        select:focus {
            background: #292929 !important;
            border-color: var(--red) !important;
            outline: none !important;
        }

        ::placeholder {
            color: #777777 !important;
        }

        /* =========================================================
           BREADCRUMBS
        ========================================================= */

        .p-breadcrumbs {
            background: transparent !important;
            padding: 8px 0 !important;
        }

        .p-breadcrumbs a {
            color: #888888 !important;
            font-size: 12px !important;
        }

        .p-breadcrumbs a:hover {
            color: #ffffff !important;
        }

        /* =========================================================
           PAGINATION
        ========================================================= */

        .pageNav-page,
        .pageNav-page a {
            background: #242424 !important;
            border: 1px solid #3a3a3a !important;
            color: #cccccc !important;
            border-radius: 2px !important;
        }

        .pageNav-page:hover,
        .pageNav-page a:hover {
            background: #303030 !important;
            color: #ffffff !important;
        }

        .pageNav-page--current,
        .pageNav-page.is-selected {
            background: var(--red) !important;
            border-color: #950000 !important;
            color: #ffffff !important;
        }

        /* =========================================================
           FOOTER
        ========================================================= */

        .p-footer {
            background: #181818 !important;
            border-top: 1px solid #303030 !important;
            color: #888888 !important;
            font-size: 12px !important;
            margin-top: 25px !important;
        }

        .p-footer a {
            color: #888888 !important;
        }

        .p-footer a:hover {
            color: #ffffff !important;
        }

        /* =========================================================
           MISC XF ELEMENTS
        ========================================================= */

        .notice {
            background: #242424 !important;
            border: 1px solid #353535 !important;
            color: #cccccc !important;
            border-radius: 0 !important;
        }

        .tabs {
            border-bottom: 1px solid #303030 !important;
        }

        .tabs-tab {
            color: #aaaaaa !important;
        }

        .tabs-tab:hover {
            color: #ffffff !important;
        }

        .tabs-tab.is-active {
            color: #ffffff !important;
            border-bottom-color: var(--red) !important;
        }

        .formRow {
            border-color: #303030 !important;
        }

        .formRow-label {
            color: #cccccc !important;
        }

        .formRow-explain {
            color: #888888 !important;
        }

        .formSubmitRow {
            background: #202020 !important;
            border-top: 1px solid #303030 !important;
        }

        /* =========================================================
           TOOLTIP / POPUP
        ========================================================= */

        .tooltip,
        .tooltip--basic {
            background: #222222 !important;
            border: 1px solid #3a3a3a !important;
            color: #eeeeee !important;
            border-radius: 2px !important;
        }

        /* =========================================================
           SCROLLBAR
        ========================================================= */

        ::-webkit-scrollbar {
            width: 9px !important;
            height: 9px !important;
        }

        ::-webkit-scrollbar-track {
            background: #0d0d0d !important;
        }

        ::-webkit-scrollbar-thumb {
            background: #3b3b3b !important;
            border-radius: 0 !important;
            border: 2px solid #0d0d0d !important;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #555555 !important;
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 900px) {

            .p-header,
            .p-header-inner {
                min-height: 140px !important;
            }

            .p-header-logo img {
                max-height: 90px !important;
            }

            .p-nav-inner {
                max-width: 100% !important;
            }

            .p-navEl .p-navEl-link,
            .p-nav-list > li > a {
                font-size: 13px !important;
                padding: 0 9px !important;
            }

            .p-body {
                padding-left: 8px !important;
                padding-right: 8px !important;
            }

            .node-title a {
                font-size: 15px !important;
            }

            .block-minorHeader {
                font-size: 16px !important;
                padding: 13px 14px !important;
            }

            .block-header {
                padding: 13px 14px !important;
            }
        }
    `);

    /* =============================================================
       JAVASCRIPT
    ============================================================= */

    function replaceLikeImages() {

        document
            .querySelectorAll(
                'img.reaction-image--emoji.js-reaction[alt="Like"], ' +
                'img.reaction-image--emoji.js-reaction[title="Like"]'
            )
            .forEach(function (img) {

                /*
                 * Already replaced.
                 */
                if (
                    img.parentElement &&
                    img.parentElement.querySelector('.v3rm-green-like')
                ) {
                    return;
                }

                /*
                 * Create a real element instead of using
                 * ::before / ::after on the <img>.
                 */
                const replacement = document.createElement('span');

                replacement.className = 'v3rm-green-like';

                replacement.setAttribute('aria-label', 'Like');
                replacement.setAttribute('title', 'Like');

                replacement.innerHTML = `
                    <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path d="
                            M2 10
                            H6
                            V22
                            H2
                            Z

                            M8 10
                            L13 2
                            C13.4 1.3 14.2 1 15 1.3
                            C16.1 1.7 16.7 2.9 16.3 4
                            L15 9
                            H20.5
                            C22.1 9 23.2 10.4 22.8 11.9
                            L20.8 20
                            C20.5 21.2 19.4 22 18.2 22
                            H8
                            Z
                        "/>
                    </svg>
                `;

                img.replaceWith(replacement);
            });
    }

    function fixThemeElements() {

        /* ---------------------------------------------------------
           REMOVE SECTION LINKS COMPLETELY
        --------------------------------------------------------- */

        document
            .querySelectorAll('.p-sectionLinks')
            .forEach(function (el) {
                el.remove();
            });

        /* ---------------------------------------------------------
           RED BLOCK HEADERS
        --------------------------------------------------------- */

        document
            .querySelectorAll('.block-header')
            .forEach(function (el) {

                el.style.setProperty(
                    'background',
                    'linear-gradient(to bottom, #df1515 0%, #d50000 100%)',
                    'important'
                );

                el.style.setProperty(
                    'color',
                    '#ffffff',
                    'important'
                );

                el.style.setProperty(
                    'border',
                    'none',
                    'important'
                );

                el.style.setProperty(
                    'border-bottom',
                    '1px solid #a90000',
                    'important'
                );

                el.style.setProperty(
                    'border-radius',
                    '0',
                    'important'
                );

                el.querySelectorAll('h2, h3, a, span')
                    .forEach(function (child) {

                        child.style.setProperty(
                            'color',
                            '#ffffff',
                            'important'
                        );
                    });
            });

        /* ---------------------------------------------------------
           RED CATEGORY HEADERS
        --------------------------------------------------------- */

        document
            .querySelectorAll(
                '.block-minorHeader, h3.block-minorHeader, .node-categoryStrip'
            )
            .forEach(function (el) {

                el.style.setProperty(
                    'background',
                    '#d90000',
                    'important'
                );

                el.style.setProperty(
                    'color',
                    '#ffffff',
                    'important'
                );

                el.style.setProperty(
                    'border-radius',
                    '0',
                    'important'
                );
            });

        /* ---------------------------------------------------------
           MAIN NAV
        --------------------------------------------------------- */

        document
            .querySelectorAll(
                '.p-nav, .p-nav-inner, nav.p-nav'
            )
            .forEach(function (el) {

                el.style.setProperty(
                    'background',
                    '#202020',
                    'important'
                );
            });

        /* ---------------------------------------------------------
           REACTIONS
        --------------------------------------------------------- */

        document
            .querySelectorAll(
                '.reactionsBar, ' +
                '.reactionsBar.js-reactionsList, ' +
                '.reactionsBar.js-reactionsList.is-active, ' +
                '.js-reactionsList.is-active'
            )
            .forEach(function (el) {

                el.style.setProperty(
                    'background',
                    '#393939',
                    'important'
                );

                el.style.setProperty(
                    'color',
                    '#dddddd',
                    'important'
                );

                el.style.setProperty(
                    'border-color',
                    '#303030',
                    'important'
                );

                el.style.setProperty(
                    'box-shadow',
                    'none',
                    'important'
                );
            });

        /* ---------------------------------------------------------
           REPLACE LIKE IMAGES
        --------------------------------------------------------- */

        replaceLikeImages();
    }

    /* =============================================================
       INITIAL LOAD
    ============================================================= */

    function startTheme() {
        fixThemeElements();
    }

    if (document.readyState === 'loading') {

        document.addEventListener(
            'DOMContentLoaded',
            startTheme,
            { once: true }
        );

    } else {

        startTheme();

    }

    /* =============================================================
       DYNAMIC XF CONTENT
    ============================================================= */

    let observerTimeout = null;

    const obs = new MutationObserver(function () {

        if (observerTimeout) {
            return;
        }

        observerTimeout = setTimeout(function () {

            observerTimeout = null;

            fixThemeElements();

        }, 50);
    });

    if (document.documentElement) {

        obs.observe(
            document.documentElement,
            {
                childList: true,
                subtree: true
            }
        );

    }

})();
