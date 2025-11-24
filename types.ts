import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}