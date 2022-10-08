/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.kylin.common;

import java.util.Collection;
import java.util.Collections;
import java.util.Enumeration;
import java.util.Map;
import java.util.Properties;
import java.util.Set;
import java.util.concurrent.ConcurrentMap;
import java.util.function.BiConsumer;
import java.util.function.BiFunction;
import java.util.function.Function;

import io.kyligence.config.core.loader.IExternalConfigLoader;
import org.apache.kylin.common.util.CompositeMapView;

import com.google.common.collect.Maps;

import io.kyligence.config.external.loader.NacosExternalConfigLoader;
import lombok.EqualsAndHashCode;

/**
 * It's mainly for reading by getting property config for some key.
 * A few functions of hashtable are disabled.
 * In the future, we should replace the java.util.Properties
 */
@EqualsAndHashCode
public class PropertiesDelegate extends Properties {

    @EqualsAndHashCode.Include
    private final ConcurrentMap<Object, Object> properties = Maps.newConcurrentMap();

    @EqualsAndHashCode.Include
    private final transient IExternalConfigLoader configLoader;

    private final Map delegation;

    public PropertiesDelegate(Properties properties, IExternalConfigLoader configLoader) {
        this.properties.putAll(properties);
        this.configLoader = configLoader;
        if (configLoader == null) {
            this.delegation = this.properties;
        } else if (configLoader instanceof KylinExternalConfigLoader) {
            this.delegation = new CompositeMapView(((ICachedExternalConfigLoader)this.configLoader).getPropertyEntries(), this.properties);
        } else if (configLoader instanceof NacosExternalConfigLoader) {
            this.delegation = new CompositeMapView((this.configLoader).getProperties(), this.properties);
        } else {
            throw new IllegalArgumentException(configLoader.getClass() + " is not supported ");
        }
    }

    public void reloadProperties(Properties properties) {
        this.properties.clear();
        this.properties.putAll(properties);
    }

    @Override
    public String getProperty(String key) {
        return (String) this.get(key);
    }

    @Override
    public String getProperty(String key, String defaultValue) {
        return (String) this.getOrDefault(key, defaultValue);
    }

    @Override
    public Object setProperty(String key, String value) {
        return this.put(key, value);
    }

    @Override
    public Enumeration<Object> keys() {
        return Collections.enumeration(delegation.keySet());
    }

    @Override
    public Enumeration<Object> elements() {
        return Collections.enumeration(delegation.values());
    }

    @Override
    public boolean contains(Object value) {
        throw new UnsupportedOperationException();
    }

    /**
     * It's not accurate since overridden keys will be counted multiple times
     */
    @Override
    public int size() {
        return delegation.size();
    }


    @Override
    public boolean isEmpty() {
        return delegation.isEmpty();
    }

    @Override
    public boolean containsKey(Object key) {
        return delegation.containsKey(key);
    }

    @Override
    public boolean containsValue(Object value) {
        return delegation.containsValue(value);
    }

    @Override
    public Object get(Object key) {
        return delegation.get(key);
    }

    @Override
    public Object put(Object key, Object value) {
        return this.properties.put(key, value);
    }

    @Override
    public Object remove(Object key) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void putAll(Map<?, ?> t) {
        properties.putAll(t);
    }

    @Override
    public void clear() {
        properties.clear();
    }

    @Override
    public Object clone() {
        throw new UnsupportedOperationException();
    }

    @Override
    public String toString() {
        throw new UnsupportedOperationException();
    }

    @Override
    public Set<Object> keySet() {
        return delegation.keySet();
    }

    @Override
    public Set<Map.Entry<Object, Object>> entrySet() {
        return delegation.entrySet();
    }

    @Override
    public Collection<Object> values() {
        return delegation.values();
    }

    @Override
    public Object getOrDefault(Object key, Object defaultValue) {
        return delegation.getOrDefault(key, defaultValue);
    }

    @Override
    public void forEach(BiConsumer<? super Object, ? super Object> action) {
        throw new UnsupportedOperationException();
    }

    private ConcurrentMap<Object, Object> getAllProperties() {
        // When KylinExternalConfigLoader is enabled, properties is static
        if (configLoader == null || configLoader.getClass().equals(KylinExternalConfigLoader.class)
                || configLoader.getClass().getSimpleName().equals("TestExternalConfigLoader")) {
            /**
             * Return properties directly
             * 1. if configloader is null
             * 2. if configloadder is KylinExternalConfigLoader.class
             * 3. if running UT
             */
            return properties;
        } else if (configLoader.getClass().equals(NacosExternalConfigLoader.class)) {
            // When NacosExternalConfigLoader enabled, fetch config entries from remote for each call
            // TODO: Kylin should call remote server in periodically, otherwise query concurrency
            // maybe impacted badly
            ConcurrentMap<Object, Object> propertiesView = Maps.newConcurrentMap();
            propertiesView.putAll(this.configLoader.getProperties());
            propertiesView.putAll(this.properties);
            return propertiesView;
        } else {
            throw new IllegalArgumentException(configLoader.getClass() + " is not supported ");
        }
    }

    @Override
    public boolean remove(Object key, Object value) {
        throw new UnsupportedOperationException();
    }

    @Override
    public boolean replace(Object key, Object oldValue, Object newValue) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Object replace(Object key, Object value) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Object computeIfAbsent(Object key, Function<? super Object, ? extends Object> mappingFunction) {
        throw new UnsupportedOperationException();
    }

    @Override
    public Object computeIfPresent(Object key,
            BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction) {
        throw new UnsupportedOperationException();
    }

    @Override
    public synchronized Object compute(Object key,
            BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction) {
        throw new UnsupportedOperationException();
    }

    @Override
    public synchronized Object merge(Object key, Object value,
            BiFunction<? super Object, ? super Object, ? extends Object> remappingFunction) {
        throw new UnsupportedOperationException();
    }
}
