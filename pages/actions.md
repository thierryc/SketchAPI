---
layout: sidebar-page
title: Actions Reference
permalink: /reference/action/
script: /js/search.js
---

This is a list of the actions that plugins can respond to.

If you want to learn how to listen to an action, see [the Action API guide](/guides/action-api/).

<table>
  <tbody>
    <tr>
      <td>Action Name</td>
      <td>Triggered when</td>
    </tr>
{%- assign actions = site.actions | sort: 'title' -%}
{%- for action in actions -%}
{%- if action.documented == true -%}
    <tr>
      <td><a href="{{action.url}}">{{ action.title }}</a></td>
      <td>{{ action.trigger }}</td>
    </tr>
{%- endif -%}
{%- endfor -%}
  </tbody>
</table>
