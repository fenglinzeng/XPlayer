/**
* SVG used by DPlayer
*/

const svgSource = {
    'rotate-prev': ['0 0 1024 1024', 'M549.091 911.183c-114.216 0-217.38-47.127-291.28-122.916l34.05-36.486c65.532 68.066 157.51 110.486 259.454 110.486 198.93 0 360.2-161.27 360.2-360.2 0-198.932-161.27-360.198-360.2-360.198-188.429 0-342.871 144.738-358.674 329.07h87.413L173.328 648.816 66.602 470.939h77.17c16.985-209.09 191.847-373.54 405.32-373.54 224.722 0 406.89 182.17 406.89 406.892 0 224.717-182.168 406.892-406.89 406.892z M513.35 409.687c-15.965-16.117-37.95-24.29-65.342-24.292h-0.01a142.998 142.998 0 0 0-3.845 0.053c-28.87 1.316-51.413 10.032-66.999 25.907-15.537 15.823-24.294 38.925-26.03 68.663a5.966 5.966 0 0 0-0.003 0.648c1.312 27.66 9.107 49.185 23.166 63.977 14.137 14.874 34.7 23.088 61.118 24.413a6.22 6.22 0 0 0 0.477 0.007c24.733-0.682 44.904-8.49 60.199-23.263-1.714 23.325-6.28 41.465-13.63 54.067-8.623 14.785-21.002 21.972-37.846 21.972-0.427 0-0.855-0.004-1.288-0.015h-0.13c-20.358 0-33.502-11.233-40.183-34.339a6.143 6.143 0 0 0-7.19-4.297l-34.87 7.504a6.14 6.14 0 0 0-4.659 7.516c5.318 20.917 15.313 36.904 29.705 47.519 14.288 10.538 33.1 15.882 55.911 15.89 0.586 0.007 1.172 0.01 1.752 0.01 33.785 0 59.557-12.344 76.6-36.692 16.563-23.66 24.962-59.24 24.965-105.752 0.234-25.153-2.258-47.034-7.41-65.037-5.28-18.448-13.508-33.406-24.458-44.46z m-19.019 74.261c-2.341 28.455-18.2 42.464-49.881 44.065-28.22-1.6-42.11-17.542-43.685-50.137 1.579-32.608 15.885-48.547 44.998-50.133 16.077 0.419 27.778 5.053 35.763 14.166 8.07 9.206 12.377 23.35 12.805 42.04zM735.485 421.88c-16.273-23.731-40.679-35.991-72.54-36.437h-0.085a7.12 7.12 0 0 0-0.256 0.005c-31.768 1.327-56.214 13.994-72.657 37.65-15.995 23.01-24.533 56.97-25.377 100.94l-0.001 0.175c0.417 44.422 8.75 78.516 24.765 101.335 16.481 23.484 41.19 35.62 73.44 36.067 0.585 0.008 1.17 0.012 1.746 0.012 31.769 0 55.999-11.95 72.017-35.515 15.515-22.823 23.382-57.126 23.382-101.957v-0.06c-0.43-44.811-8.651-79.202-24.434-102.216z m-27.703 103.454v0.07c0 33.094-3.987 58.074-11.848 74.247-7.258 14.93-17.68 22.187-31.866 22.187-0.353 0-0.702-0.004-1.058-0.014l-0.15-0.002-0.149 0.002a45.89 45.89 0 0 1-1.058 0.014c-14.188 0-24.613-7.257-31.865-22.184-7.857-16.169-11.84-41.15-11.84-74.25 0-33.522 3.99-58.827 11.86-75.21 7.263-15.121 17.686-22.471 31.87-22.471 0.344 0 0.686 0.004 1.035 0.012l0.15 0.002c0.098 0 0.194-0.002 0.292-0.007 0.699-0.034 1.398-0.05 2.077-0.05 9.171 0 16.575 2.98 22.635 9.11 13.73 13.893 20.432 43.684 19.915 88.544zM735.86 284.17c-25.785 0-46.69 20.906-46.69 46.693s20.905 46.692 46.69 46.692c25.788 0 46.693-20.906 46.693-46.692s-20.905-46.693-46.693-46.693z m0 66.703c-11.046 0-20.009-8.959-20.009-20.012 0-11.052 8.963-20.011 20.009-20.011 11.059 0 20.013 8.959 20.013 20.011-0.001 11.053-8.955 20.012-20.013 20.012z'],
    'rotate-next': ['0 0 1024 1024', 'M864.128 603.904l91.328-110.464-5.632-11.968h-70.4c-30.208-199.872-201.472-349.888-404.48-349.888-225.92 0-409.088 184.704-409.088 412.416 0 222.848 175.552 405.12 395.968 412.16l7.552-7.296v-36.8l-7.04-7.36c-192.32-6.72-345.344-166.08-345.344-360.704 0-199.36 160.256-360.96 357.952-360.96 174.848 0 322.944 127.232 352.64 298.432h-60.416l-5.632 11.968 91.328 110.464 5.632-4.672 5.632 4.672z m0-9.344l-5.632-6.784-5.632 6.784 5.632 4.672 5.632-4.672z M323.648 442.752c-24.576 0-44.928 8-60.672 24.256-16.192 15.936-23.872 35.968-23.872 60.544 0 23.936 7.04 43.264 21.376 58.176 14.72 15.552 34.048 23.552 58.24 23.552 14.72 0 27.712-3.84 38.976-10.752 11.52-7.232 20.672-17.28 27.008-29.76h1.408c0 4.16 0.32 7.296 0.32 8.96 0 27.712-5.568 50.944-16.448 69.248-11.584 19.072-27.008 28.8-46.336 28.8-29.44 0-46.72-14.272-51.904-42.24h-28.416c6.656 43.904 33.28 66.048 80 66.048 28.032 0 50.496-13.12 67.328-38.72 15.424-24.96 23.488-56.768 23.488-96.256 0-38.08-7.36-67.84-22.08-88.576-15.424-22.208-38.272-33.28-68.416-33.28z m0.704 23.936c17.216 0 31.232 5.824 41.728 17.6a60.608 60.608 0 0 1 15.488 42.624 59.264 59.264 0 0 1-16.192 42.24 56.256 56.256 0 0 1-41.024 16.576c-17.536 0-31.232-5.568-41.408-16.256-10.496-10.368-15.424-24.576-15.424-41.92 0-17.92 4.928-32.512 15.424-43.904 10.56-11.456 24.192-16.96 41.408-16.96z m212.608-23.936c-30.144 0-52.608 12.8-67.712 39.168-13.312 22.144-20.032 51.84-20.032 89.28 0 37.376 6.72 67.2 20.032 89.28 15.104 25.984 37.568 39.104 67.712 39.104 29.824 0 52.288-13.12 67.712-39.04 13.312-22.208 19.968-51.968 19.968-89.344 0-37.376-6.656-67.2-19.968-89.28-15.424-26.368-37.888-39.168-67.712-39.168z m0 24.256c22.4 0 38.592 11.776 48.384 35.648 7.04 16.64 10.88 39.488 10.88 68.48 0 28.8-3.84 51.648-10.88 68.608-9.792 23.552-25.92 35.648-48.384 35.648-22.4 0-38.592-12.16-48.448-35.648-7.04-16.96-10.496-39.808-10.496-68.544 0-29.056 3.52-51.904 10.496-68.544 9.856-23.872 25.984-35.648 48.448-35.648zM633.92 445.76c28.16 0 50.88-22.912 50.88-51.2 0-28.224-22.784-51.2-50.88-51.2a51.008 51.008 0 0 0-50.88 51.2c0 28.288 22.784 51.2 50.88 51.2z m0-21.952a29.12 29.12 0 0 1-28.928-29.248c0-16.192 12.992-29.248 28.928-29.248 16 0 28.928 13.056 28.928 29.248a29.12 29.12 0 0 1-28.928 29.248z'],
    'volume-up': ['0 0 21 32','M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z'
    ],
    'volume-down': ['0 0 21 32','M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'
    ],
    play: ['0 0 16 32', 'M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z'],
    pause: ['0 0 17 32', 'M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z'],
    'volume-up': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056zM29.728 16q0 4.096-2.272 7.552t-6.048 5.056q-0.224 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.64 0.704-1.056 0.128-0.064 0.384-0.192t0.416-0.192q0.8-0.448 1.44-0.896 2.208-1.632 3.456-4.064t1.216-5.152-1.216-5.152-3.456-4.064q-0.64-0.448-1.44-0.896-0.128-0.096-0.416-0.192t-0.384-0.192q-0.704-0.416-0.704-1.056 0-0.448 0.32-0.8t0.832-0.352q0.224 0 0.448 0.096 3.776 1.632 6.048 5.056t2.272 7.552z'],
    'volume-down': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z'],
    'volume-off': ['0 0 21 32', 'M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z'],
    loop: ['0 0 32 32', 'M1.882 16.941c0 4.152 3.221 7.529 7.177 7.529v1.882c-4.996 0-9.060-4.222-9.060-9.412s4.064-9.412 9.060-9.412h7.96l-3.098-3.098 1.331-1.331 5.372 5.37-5.37 5.372-1.333-1.333 3.1-3.098h-7.962c-3.957 0-7.177 3.377-7.177 7.529zM22.94 7.529v1.882c3.957 0 7.177 3.377 7.177 7.529s-3.221 7.529-7.177 7.529h-7.962l3.098-3.098-1.331-1.331-5.37 5.37 5.372 5.372 1.331-1.331-3.1-3.1h7.96c4.998 0 9.062-4.222 9.062-9.412s-4.064-9.412-9.060-9.412z'],
    full: ['0 0 32 33', 'M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z'],
    'full-in': ['0 0 32 33', 'M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z'],
    setting: ['0 0 32 28', 'M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z'],
    right: ['0 0 32 32', 'M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z'],
    camera: ['0 0 32 32', 'M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z']
};

module.exports = type => `
    <svg xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" version="1.1" viewBox="${svgSource[type][0]}" width="100%">
        <use xlink:href="#xplayer-${type}"></use>
        <path class="xplayer-fill" d="${svgSource[type][1]}" id="xplayer-${type}"></path>
    </svg>
`;