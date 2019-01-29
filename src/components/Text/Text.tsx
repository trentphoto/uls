import React from 'react'
import renderHTML from 'react-render-html'
import './text.css'

type TextSizes = 'extra-small' /** 14px */ | 'small' | 'medium' | 'large'

interface TextProps {
  /**
   * @param extraSmall 14px For tags, by-lines, or author names
   * @param small 16px For general content
   * @param medium 18px For shorter descriptions
   * @param large 21px For sub headers
   */
  size: TextSizes
  color: 'white' | 'black' | 'colored' | 'grey'
  weight?: 'light' | 'normal' | 'bold' | 'semi-bold'
  style?: 'italic' | 'normal'
  centered?: boolean
  className?: string
  children: any
}

const Text = ({
  size,
  children,
  weight,
  color,
  style,
  centered,
  className
}: TextProps) => {
  const determineTextType = () => {
    const classes = ['text']
    switch (color) {
      case 'white':
        classes.push('white')
        break
      case 'colored':
        classes.push('colored')
        break
      case 'black':
        classes.push('black')
      case 'grey':
        classes.push('grey')
      default:
        break
    }
    switch (weight) {
      case 'light':
        classes.push('_300')
        break
      case 'normal':
        classes.push('_400')
        break
      case 'semi-bold':
        classes.push('_500')
        break
      case 'bold':
        classes.push('_700')
        break
      default:
        break
    }
    switch (size) {
      case 'extra-small':
        classes.push('extra-small')
        break
      case 'small':
        classes.push('small')
        break
      case 'medium':
        classes.push('medium')
        break
      case 'large':
        classes.push('large')
        break
      default:
        break
    }
    switch (style) {
      case 'italic':
        classes.push('italic')
        break
      default:
        break
    }
    if (centered) {
      classes.push('centered')
    }
    let classList = 'text'
    classes.forEach((item: string) => {
      classList += ' '
      classList += item
    })
    if (className) {
      classList += ' '
      classList += className
    }
    return classList
  }
  return <p className={determineTextType()}>{renderHTML(children)}</p>
}

export default Text
