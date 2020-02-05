import React from "react";

const findMatch = ({ relationships, relation }) => {
  return relationships.find(node => {
    return node.type === relation.type && node.id === relation.id;
  });
};

export const RenderRelationships = ({
  relationships = [],
  relation,
  children,
}) =>
  typeof findMatch({ relationships, relation }) !== "undefined" &&
  children(findMatch({ relationships, relation }));
