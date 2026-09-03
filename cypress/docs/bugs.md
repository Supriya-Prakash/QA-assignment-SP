# Bugs / Findings

## BUG-001 - Insufficient color contrast on Logout button

### Steps to reproduce 

1. Login with valid credentials.
2. Navigate to the home page.
3. Run the accessibility test.
4. Review the reported `color-contrast` violation for the Logout button.

### Actual result

The Logout button has a contrast ratio of **3.96:1**, which is below the **4.5:1** minimum required for normal-sized text under WCAG Level AA.

### Expected result

The Logout button should meet the required **4.5:1** contrast ratio for normal-sized text under WCAG Level AA.

## BUG-002 - Login button has no visible keyboard focus indicator

### Steps to reproduce 

1. Open the Login page.
2. Navigate through the page using the `Tab` key.
3. Move focus to the Login button.
4. Observe the button's visual state.

### Actual result

When navigating through the login page using the keyboard, focus reaches the Login button but no visible focus indication is displayed.

### Expected result

A clearly visible focus indicator should be provided when the Login button receives keyboard focus, allowing keyboard users to identify the currently focused element.

## BUG-003 - Password field has no placeholder

### Steps to reproduce 

1. Open the Login page.
2. Locate the password field.
3. Observe that no placeholder text is displayed.

### Actual result

The password input field does not display any placeholder text.

### Expected result

The password field should provide clear contextual information through its label and/or placeholder.

## BUG-004 - Navigation items appear clickable but are not interactive

### Steps to reproduce 

1. Login with valid credentials.
2. Navigate to the Home page.
3. Observe the Home, Products, Contact and User Profile elements.
4. Hover on these elements and attempt to click.
5. Observe that no action occurs.

### Actual result

The elements appear to users as navigation options, but clicking them does not result in navigation or another visible action.

### Expected result

Elements that are presented as navigation options should provide the expected interaction, or their visual presentation should clearly indicate that they are not interactive.


