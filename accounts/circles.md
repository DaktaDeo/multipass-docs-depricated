---
canonicalUrl: 'https://forge.laravel.com/docs/1.0/accounts/circles.html'
---
# Circles

[[toc]]

## Overview

Forge circles allow you to collaborate with team members that may manage servers and sites on your behalf. You can create as many circles as you would like and add as many team members as needed to each circle.

:::warning Business Plan Only
Creating and managing Circles is only available on our "business" plan.
:::

## Creating Circles

You may create a circle via the [Forge circle dashboard](https://forge.laravel.com/circles). To create a circle, you only need to provide a name.

## Managing Circles

Circles that you manage will be listed in the **Managed Circles** table.

### Editing Circles

You can edit a circle by clicking the "edit" button next to the circle's name. Editing a circle will allow you to:

- Rename the circle
- Select credentials to share with circle members
- Select servers to share with circle members
- Invite members to the circle
- Manage circle members
- View or delete open circle invites

Shared credentials will allow servers to be created on your behalf. The servers will be created in **your** server provider's account.

### Managing Circle Members

To invite a new member to the circle, you need to provide their email address and at least one permission. If the email address provided doesn't match an existing Forge account, the user will be invited to create an account. The invited user may accept the invite from the same email.

#### Permissions

You may limit a circle member's access to servers and sites by selecting their permissions. Without any permissions, members will always be able to read server and site data but will be unable to make any changes.

When selecting which permissions a member has, you may hover over the "i" icon to learn more about what that permission does. You may change a member's permissions at any time by editing the circle member.

API tokens generated by a circle member will also be restricted to the permissions they have been assigned when using the API to interact with circle servers.

### Deleting Circles

You can delete circles via the [Forge circle dashboard](https://forge.laravel.com/circles) by clicking the "delete" button next to the circle's name. You will be asked to confirm the deletion before it is actually deleted.

:::warning Circle Server Access

When deleting a circle, members will no longer be able to access shared servers or credentials.
:::

## Accepting a Circle invite

After being invited to a Circle, you will receive an email with a link that you may use to accept an invite.

If you would like to see any pending Circle invitations you have, you may visit the [Circle dashboard](https://forge.laravel.com/circles) and see the invitations listed under "Pending invites".

## Leaving a Circle

You can leave a Circle that you are a member of by visiting the [Circle dashboard](https://forge.laravel.com/circles) and clicking the "leave" button next to the Circle's name.