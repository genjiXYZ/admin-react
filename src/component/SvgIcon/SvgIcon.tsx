/*
 * @Author: your name
 * @Date: 2021-08-13 23:28:00
 * @LastEditTime: 2021-08-14 00:15:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my-test-app/src/component/SvgIcon/SvgIcon.tsx
 */
import React, { memo, useMemo } from "react";

// import Icon from "@ant-design/icons";
import Icon from "@ant-design/icons";

interface ISvgIcon {
  iconClass: string;
  fontSize?: string;
  fill?: string;
  className?: string;
}

const SvgIconTem: React.FC<ISvgIcon> = ({
  iconClass,
  fill,
  fontSize,
  className,
  ...props
}) => {
  const iconName = useMemo(() => "#" + iconClass, [iconClass]);
  return (
    <Icon
      {...props}
      component={() => (
        <svg
          style={{ ...svgStyle, fontSize }}
          aria-hidden="true"
          className={className}
        >
          <use xlinkHref={iconName} fill={fill} />
        </svg>
      )}
    ></Icon>
  );
};

const svgStyle = {
  width: "1em",
  height: "1em",
  verticalAlign: "-0.15em",
  overflow: "hidden",
  fill: "currentColor", // 颜色值
  fontSize: "1.1em",
};

const SvgIcon = memo(SvgIconTem);
export default SvgIcon;
