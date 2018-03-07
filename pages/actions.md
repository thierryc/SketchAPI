---
layout: sidebar-page
title: Actions Reference
permalink: /reference/action/
script: /js/search.js
---

This is a list of the actions that plugins can respond to.

It's a long list, and most haven't been documented yet, but we're providing it now to allow people to experiment whilst the documentation catches up.

If you want to learn how to listen to an action, see [the Action API guide](/guides/action-api/).

<table>
  <tbody>
    <tr>
      <td>Action Name</td>
      <td>Triggered when…</td>
    </tr>
{%- assign actions = site.actions | sort: 'title' -%}
{%- for action in actions -%}
    <tr>
      <td><a href="{{action.url}}">{{ action.title }}</a></td>
      <td>{{ action.summary }}</td>
    </tr>
{%- endfor -%}
  </tbody>
</table>
