/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   cuba-service.html
 */
/// <reference path="cuba-data-loading-behavior.d.ts" />
/// <reference path="../cuba-app/cuba-app-aware-behavior.d.ts" />

/**
 * The `cuba-service` element provides an ability to load data from [middleware service](https://doc.cuba-platform.com/manual-latest/services.html).
 * The service should be [exposed](https://doc.cuba-platform.com/manual-latest/rest_api_v2_services_config.html) in REST API.
 */
interface CubaServiceElement extends Polymer.Element, CubaAppAwareBehavior, CubaDataLoadingBehavior {
  serviceName: string|null|undefined;
  method: string|null|undefined;
  params: object|null|undefined;

  /**
   * Type of data format expected in response. Currently supported: `text`, `json`, `blob`.
   */
  handleAs: string|null|undefined;
}

interface HTMLElementTagNameMap {
  "cuba-service": CubaServiceElement;
}
