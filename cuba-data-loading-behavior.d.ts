/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cuba-data-loading-behavior.html
 */

/**
 * In order to use this behavior:
 * 1. _load method should be overridden. It must return jqXHR promise.
 * 2. Call _optionsChanged method on meaningful properties changes/initialization i.e:
 *
 *  `observers: ['_optionsChanged(serviceName, method, handleAs, auto)']`
 */
interface CubaDataLoadingBehavior {

  /**
   * If true - automatically loads data.
   */
  auto: object|null|undefined;

  /**
   * Loaded data
   */
  readonly data: any;

  /**
   * Amount of time (in milliseconds) to send a request after property change (to prevent frequent requests).
   */
  debounceDuration: number|null|undefined;

  /**
   * Indicates whether last request is pending.
   */
  readonly loading: boolean|null|undefined;

  /**
   * Loads data.
   * Returns Promise.
   */
  load(abortable?: any): any;
  _optionsChanged(): void;
  _handleAbortable(abortable: any): any;

  /**
   * This method has to be overridden to contain real loading logic.
   */
  _load(): void;
}
