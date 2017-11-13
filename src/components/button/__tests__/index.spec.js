import Button from '../index';
import {Colors, BorderRadiuses, Typography, ThemeManager} from '../../../style';

describe('Button', () => {
  beforeEach(() => {
    ThemeManager.setComponentTheme('Button', {});
  });

  describe('isOutline', () => {
    it('should return false when outline or outlineColor props were not sent', () => {
      const uut = new Button({});
      expect(uut.isOutline).toBe(false);
    });

    it('should return true if either outline or outlineColor props were sent', () => {
      expect(new Button({outline: true}).isOutline).toBe(true);
      expect(new Button({outlineColor: 'blue'}).isOutline).toBe(true);
      expect(new Button({outline: true, outlineColor: 'blue'}).isOutline).toBe(true);
    });
  });

  describe('isFilled', () => {
    it('should return true if button is not a link or outline', () => {
      expect(new Button({}).isFilled).toBe(true);
    });

    it('should return false if button is an outline button', () => {
      expect(new Button({outline: true}).isFilled).toBe(false);
      expect(new Button({outlineColor: 'blue'}).isFilled).toBe(false);
    });

    it('should return false if button is a link', () => {
      expect(new Button({link: true}).isFilled).toBe(false);
    });
  });

  describe('getBackgroundColor', () => {
    it('should return by default blue30 color', () => {
      const uut = new Button({});
      expect(uut.getBackgroundColor()).toEqual(Colors.blue30);
    });

    it('should return defined theme backgroundColor', () => {
      ThemeManager.setComponentTheme('Button', {
        backgroundColor: Colors.purple40,
      });
      const uut = new Button({});
      expect(uut.getBackgroundColor()).toEqual(Colors.purple40);
    });

    it('should return backgroundColor according to official prop', () => {
      const uut = new Button({backgroundColor: 'red'});
      expect(uut.getBackgroundColor()).toEqual('red');
    });

    it('should return backgroundColor according to modifier', () => {
      const uut = new Button({'bg-orange30': true});
      expect(uut.getBackgroundColor()).toEqual(Colors.orange30);
    });

    it('should return undefined if this button is outline', () => {
      const uut = new Button({backgroundColor: 'blue', outline: true});
      expect(uut.getBackgroundColor()).toEqual('transparent');
    });

    it('should return undefined if this button is link', () => {
      const uut = new Button({'bg-orange30': true, link: true});
      expect(uut.getBackgroundColor()).toEqual('transparent');
    });

    it('should return theme disabled color if button is disabled', () => {
      const uut = new Button({'bg-orange30': true, disabled: true});
      expect(uut.getBackgroundColor()).toEqual(ThemeManager.CTADisabledColor);
    });
  });

  describe('getLabelColor', () => {
    it('should return theme ctaTextColor by default', () => {
      const uut = new Button({});
      expect(uut.getLabelColor()).toEqual(ThemeManager.CTATextColor);
    });

    it('should return blue30 color for link', () => {
      const uut = new Button({link: true});
      expect(uut.getLabelColor()).toEqual(Colors.blue30);
    });

    it('should return Theme linkColor color for link', () => {
      ThemeManager.setComponentTheme('Button', {
        linkColor: Colors.yellow40,
      });
      const uut = new Button({link: true});
      expect(uut.getLabelColor()).toEqual(Colors.yellow40);
    });

    it('should return linkColor color for link', () => {
      const uut = new Button({link: true, linkColor: Colors.orange50});
      expect(uut.getLabelColor()).toEqual(Colors.orange50);
    });

    it('should return dark10 color for outline', () => {
      const uut = new Button({outline: true});
      expect(uut.getLabelColor()).toEqual(Colors.dark10);
    });

    it('should return color according to color modifier', () => {
      const uut = new Button({red10: true});
      expect(uut.getLabelColor()).toEqual(Colors.red10);
    });

    it('should return color according to color prop', () => {
      const uut = new Button({red10: true, color: 'green'});
      expect(uut.getLabelColor()).toEqual('green');
    });

    it('should return disabled text color according to theme for link/outline button', () => {
      const uut = new Button({red10: true, color: 'green', link: true, disabled: true});
      expect(uut.getLabelColor()).toEqual(ThemeManager.CTADisabledColor);
    });
  });

  describe('getContentSizeStyle', () => {
    it('should return style for large button', () => {
      const uut = new Button({size: 'large'});
      expect(uut.getContentSizeStyle()).toEqual({paddingHorizontal: 36});
    });

    it('should return style for medium button', () => {
      const uut = new Button({size: 'medium'});
      expect(uut.getContentSizeStyle()).toEqual({paddingHorizontal: 24});
    });

    it('should return style for small button', () => {
      const uut = new Button({size: 'small'});
      expect(uut.getContentSizeStyle()).toEqual({paddingHorizontal: 15});
    });

    it('should return style for xSmall button', () => {
      const uut = new Button({size: Button.sizes.xSmall});
      expect(uut.getContentSizeStyle()).toEqual({paddingHorizontal: 12});
    });

    it('should have no padding of button is a link', () => {
      const uut = new Button({size: 'medium', link: true});
      expect(uut.getContentSizeStyle()).toEqual({paddingHorizontal: 0});
    });

    it('should have no padding if avoidInnerPadding prop was sent', () => {
      const uut = new Button({size: 'medium', avoidInnerPadding: true});
      expect(uut.getContentSizeStyle()).toEqual();
    });
  });

  describe('getLabelSizeStyle', () => {
    it('should return style for large button', () => {
      const uut = new Button({size: 'large'});
      expect(uut.getLabelSizeStyle()).toEqual({});
    });

    it('should return style for medium button', () => {
      const uut = new Button({size: 'medium'});
      expect(uut.getLabelSizeStyle()).toEqual({...Typography.text80});
    });

    it('should return style for small button', () => {
      const uut = new Button({size: 'small'});
      expect(uut.getLabelSizeStyle()).toEqual({...Typography.text80});
    });

    it('should return style for xSmall button', () => {
      const uut = new Button({size: Button.sizes.xSmall});
      expect(uut.getLabelSizeStyle()).toEqual({...Typography.text80});
    });
  });

  describe('getOutlineStyle', () => {
    it('should return undefined when outline is false', () => {
      const uut = new Button({outline: false});
      expect(uut.getOutlineStyle()).toEqual(undefined);
    });

    it('should return borderWidth style with default borderColor when outline is true', () => {
      const uut = new Button({outline: true});
      expect(uut.getOutlineStyle()).toEqual({borderWidth: 1, borderColor: Colors.blue30});
    });

    it('should return undefined when link is true, even when outline is true', () => {
      const uut = new Button({outline: true, link: true});
      expect(uut.getOutlineStyle()).toEqual(undefined);
    });

    it('should return outlineColor according to prop', () => {
      const uut = new Button({outline: true, outlineColor: 'red'});
      expect(uut.getOutlineStyle()).toEqual({borderWidth: 1, borderColor: 'red'});
    });

    it('should return outline even if only got outlineColor prop', () => {
      const uut = new Button({outlineColor: 'yellow'});
      expect(uut.getOutlineStyle()).toEqual({borderWidth: 1, borderColor: 'yellow'});
    });

    it('should return disabled color for outline if button is disabled', () => {
      const uut = new Button({disabled: true, outline: true});
      expect(uut.getOutlineStyle()).toEqual({borderWidth: 1, borderColor: Colors.dark70});
    });
  });

  describe('getBorderRadiusStyle', () => {
    it('should return default border radius - br100 when no border radius sent', () => {
      const uut = new Button({});
      expect(uut.getBorderRadiusStyle()).toEqual({borderRadius: BorderRadiuses.br100});
    });

    it('should return given border radius when use plain number', () => {
      const uut = new Button({borderRadius: 12});
      expect(uut.getBorderRadiusStyle()).toEqual({borderRadius: 12});
    });

    it('should return 0 border radius when button is a link', () => {
      const uut = new Button({link: true});
      expect(uut.getBorderRadiusStyle()).toEqual({borderRadius: 0});
    });

    it('should return 0 border radius when button is full width', () => {
      const uut = new Button({fullWidth: true});
      expect(uut.getBorderRadiusStyle()).toEqual({borderRadius: 0});
    });

    it('should return 0 border radius when border radius prop is 0', () => {
      const uut = new Button({borderRadius: 0});
      expect(uut.getBorderRadiusStyle()).toEqual({borderRadius: 0});
    });
  });

  describe('getContainerSizeStyle', () => {
    it('should return style for large button', () => {
      let uut = new Button({size: 'large'});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 16, minWidth: 138});
      uut = new Button({size: 'large', outline: true});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 15, minWidth: 138});
    });

    it('should return style for medium button', () => {
      let uut = new Button({size: 'medium'});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 11, minWidth: 125});
      uut = new Button({size: 'medium', outline: true});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 10, minWidth: 125});
    });

    it('should return style for small button', () => {
      let uut = new Button({size: 'small'});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 5, minWidth: 74});
      uut = new Button({size: 'small', outline: true});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 4, minWidth: 74});
    });

    it('should return style for xSmall button', () => {
      let uut = new Button({size: Button.sizes.xSmall});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 4, minWidth: 60});
      uut = new Button({size: Button.sizes.xSmall, outline: true});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 3, minWidth: 60});
    });

    it('should avoid minWidth limitation if avoidMinWidth was sent', () => {
      const uut = new Button({size: Button.sizes.medium, avoidMinWidth: true});
      expect(uut.getContainerSizeStyle()).toEqual({paddingVertical: 11});
    });
  });
});
