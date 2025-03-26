export interface PageLayout {
  beforeBody: any[];
  left: any[];
  right: any[];
}

export interface SharedLayout {
  head: any;
  header: any[];
  afterBody: any[];
  footer: any;
}

export interface Layout {
  components: Record<string, any>;
}

export function defineLayout(layout: Layout): Layout {
  return layout;
} 