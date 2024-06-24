import { garden as lightTheme } from 'daisyui/src/theming/themes'
import { dim as darkTheme } from 'daisyui/src/theming/themes'

export default [
  {
    katherine: {
      ...lightTheme,
      '--rounded-box': '1rem',
      '--rounded-btn': '0.5rem'
    }
  },
  {
    'katherine-dark': {
      ...darkTheme,
      '--rounded-box': '1rem',
      '--rounded-btn': '0.5rem'
    }
  }
]
