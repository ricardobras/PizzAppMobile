<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\App\Repositories\MenuRepository::class, \App\Repositories\MenuRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\MenuItemRepository::class, \App\Repositories\MenuItemRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\BeerRepository::class, \App\Repositories\BeerRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\BeerItemRepository::class, \App\Repositories\BeerItemRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\PhoneNumberRepository::class, \App\Repositories\PhoneNumberRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\CheckPhoneNumberRepository::class, \App\Repositories\CheckPhoneNumberRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\OrderRepository::class, \App\Repositories\OrderRepositoryEloquent::class);
        $this->app->bind(\App\Repositories\ImageRepository::class, \App\Repositories\ImageRepositoryEloquent::class);
        //:end-bindings:
    }
}
