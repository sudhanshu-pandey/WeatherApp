import * as React from "react";
import {
  createNavigationContainerRef,
  StackActions,
  TabActions,
} from "@react-navigation/native";

interface RefObject<T> {
  current: T | null;
}

export type NavigationEvent =
  | "transitionStart"
  | "transitionEnd"
  | "gestureStart"
  | "gestureEnd"
  | "gestureCancel"
  | string;

const listeners: Record<string, ((...args: any[]) => void)[]> = {};

const removeNavigationListener = (
  event: string,
  callback: (...args: any[]) => void,
) => {
  if (listeners[event]) {
    listeners[event] = listeners[event].filter((cb) => cb !== callback);
  }
};

const executeNavigationListeners = (eventName: string, ...args: any) => {
  if (listeners[eventName]) {
    listeners[eventName].forEach((fn) => fn(...args));
  }
};

export const addNavigationListener = (
  event: NavigationEvent,
  callback: any,
): (() => void) => {
  listeners[event] = listeners[event] || [];
  listeners[event].push(callback);

  return () => removeNavigationListener(event, callback);
};

export const isReadyRef: RefObject<boolean> = React.createRef<boolean>();
export const navigationRef = createNavigationContainerRef();

export const navigationListenerProps = {
  onTransitionEnd: (...args: any) =>
    executeNavigationListeners("transitionEnd", ...args),
  onTransitionStart: (...args: any) =>
    executeNavigationListeners("transitionStart", ...args),
  onGestureStart: (...args: any) =>
    executeNavigationListeners("gestureStart", ...args),
  onGestureEnd: (...args: any) =>
    executeNavigationListeners("gestureEnd", ...args),
  onGestureCancel: (...args: any) =>
    executeNavigationListeners("gestureCancel", ...args),
};

export const navigate = (routeName: string, params?: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef?.current?.navigate(routeName, params);
  }
};

export const push = (routeName: string, params?: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef.current.dispatch(StackActions.push(routeName, params));
  }
};

export const goBack = () => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef.current.goBack();
  }
};

export const pop = (...args: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.pop(...args));
  }
};

export const popToTop = () => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
};

export const reset = (params: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef.current?.reset(params);
  }
};

export const replace = (params: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.replace(params));
  }
};

export const jumpTo = (params: any) => {
  if (isReadyRef.current && navigationRef && navigationRef.current) {
    navigationRef.current?.dispatch(TabActions.jumpTo(params));
  }
};