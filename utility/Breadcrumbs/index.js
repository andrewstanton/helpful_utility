import styled from "styled-components";
import { lighten } from "polished";
import Link from "next/link";

import { Color, Type } from "../";

const StyledBreadcrumbs = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  background: ${lighten(0.6, Color.grey)};
  padding: 0.5rem 1.5rem;
  margin-bottom: 1rem;
`;

const Crumb = styled.div`
  margin-right: 1rem;
  font-family: ${Type.header};
  font-weight: bold !important;

  a {
    cursor: pointer;
    font-family: ${Type.header};
  }

  &::after {
    content: ">";
    padding-left: 1rem;
  }

  &.active {
    a {
      cursor: default;
    }

    &::after {
      content: "";
      padding-left: 0;
    }
  }
`;

export const Breadcrumbs = ({ crumbs = [], ...props }) => (
  <StyledBreadcrumbs {...props}>
    {crumbs.map((crumb, ix) => (
      <Crumb className={`${crumb.active && "active"}`} key={ix}>
        {crumb.active ? (
          crumb.label
        ) : (
          <Link href={crumb.href}>
            <a>{crumb.label}</a>
          </Link>
        )}
      </Crumb>
    ))}
  </StyledBreadcrumbs>
);
